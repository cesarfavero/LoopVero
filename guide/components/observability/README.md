# Observability

O harness tem observadores separados para tempo de inferência, mensagens visíveis, ferramentas, uso de tokens e diagnósticos do host. A existência de métricas indica os pontos instrumentados; não fornece resultados de benchmark nem demonstra que todos os eventos estão habilitados em uma instalação.

## Observação de desempenho do turno

`createTurnPerformanceObservation` recebe contexto, harness, tipo de sessão e turno, origem, iniciador, timestamps e clock. Mantém o estado do primeiro request, primeiro conteúdo significativo, primeiro reconhecimento, primeira ferramenta, primeiro subagente, retries e gaps. Há buffers para esperar a identificação do modelo antes de emitir determinadas métricas. [Implementação](../../../reference/runtime/sand-eval-runner.cjs#L547266-L548011).

| Momento | O que é diferenciado |
| --- | --- |
| Request iniciado | Preparação e início de inferência |
| Conteúdo significativo | Tempo até resposta de modelo, distinto de mensagem enviada |
| `firstAck` | Primeira comunicação reconhecida pelo observador |
| `messageDispatch` | Último envio e contagens de passos/ferramentas naquele instante |
| Retry | Tentativas e atraso antes do primeiro token |
| `complete` | Duração, outcome, passos e ferramentas depois da última mensagem |

`firstAck` só registra a primeira chamada ao callback, e requer observação ativa e harness definido. Esse registro usa o momento local em que o callback é chamado, armazenado como `dispatchedAt`; não é uma confirmação de leitura nem de entrega do transporte ao usuário. Para harness temporal, pode correlacionar envio do usuário, início de atividade e primeira mensagem, se os timestamps correspondentes existirem. `complete` desativa observação e emite métricas pendentes; não cria dados que faltaram. [Parte final](../../../reference/runtime/sand-eval-runner.cjs#L547853-L548011).

Isso explica por que tempo até token, tempo até mensagem e duração total não devem ser somados ou tratados como a mesma medida. Também não é possível transformar os limites de timeout em latência observada.

## Ferramentas MCP

`createTurnObservation` cria uma política de diagnóstico de stall de 15 minutos, salvo override. `beginMcpExecObservation` registra toolCallId, request, rota e transporte, arma o diagnóstico e devolve um callback de settlement de uso único. O settlement cancela o timer, calcula duração e emite outcome. [Fonte](../../../reference/runtime/sand-eval-runner.cjs#L588565-L588695).

O diagnóstico `stalled` não cancela a ferramenta nesse corpo. A rota/transporte podem resolver para `unknown` em falha, e a emissão final espera essas resoluções. Um erro de ferramenta, uma recusa antes de dispatch, cancelamento e erro de infraestrutura são eventos distintos. `observeMcpCallSettled` ainda registra recusas que nunca atingiram o executor. [Recusa](../../../reference/runtime/sand-eval-runner.cjs#L588678-L588709).

## Contagem de tokens

`turnUsageFromTurnEnded` retorna `undefined` quando todos os campos de uso estão ausentes. Caso contrário, normaliza campos ausentes para zero e preserva a ausência de reasoning quando não foi informado. O helper de conversão faz clamp entre zero e `Number.MAX_SAFE_INTEGER`. `mergeTurnUsage` soma com saturação e mantém reasoning opcional. [Código](../../../reference/runtime/sand-eval-runner.cjs#L525201-L525235).

Ausência de uso não equivale a consumo zero. Somar mensagens de eventos sem compreender sua granularidade também pode duplicar contagem; o helper aritmético não deduplica IDs de requests.

## Diagnósticos do host

`pinHostDiagnosticsReporter` instala um reporter de processo. `reportHostDiagnostic` só chama o reporter quando presente; `reportHostDiagnosticOrStderr` tem fallback para stderr e trata falha do próprio reporter. Os campos são convertidos para uma linha de diagnóstico, preservando o tipo do evento. [Fonte](../../../reference/runtime/host-main.cjs#L430740-L430770).

Os campos textuais de eventos de log possuem regras e limites declarados, por exemplo texto de log de 2.048 caracteres e stack de erro de 4.096 em categorias específicas. Isso é um contrato de seleção/formato de campos; não deve ser descrito como uma prova abrangente de anonimização. [Campos](../../../reference/runtime/host-main.cjs#L450895-L450941).

## Uso na análise

Correlacione agente, turno, request, toolCallId e lifecycle de resumo sem substituir uma identidade pela outra. Use outcome para diferenciar sucesso, bloqueio, cancelamento e erro. Consulte [scheduling](../scheduling/README.md), [cancelamento](../cancellation-recovery/README.md) e [contexto](../context-compaction/README.md) antes de interpretar um watchdog ou evento de compactação como conclusão do trabalho.
