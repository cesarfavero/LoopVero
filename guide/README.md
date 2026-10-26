# LoopVero · Complete harness guide

O objetivo deste guia é explicar o harness a partir dos arquivos originais: como uma solicitação entra, onde é roteada, como o executor monta contexto e ferramentas, como uma execução progride e como os efeitos chegam ao transcript, à memória e ao agente pai de uma delegação. Esse pai não é necessariamente o primary bot configurado pelo usuário.

O estudo distingue o código do host, o executor de avaliação e os contratos remotos. Essa separação é essencial: funções presentes em dois bundles podem ter implementação completa em um e apenas declaração no outro.

## Percurso de leitura

1. [Arquitetura](architecture/README.md): visão geral e três caminhos de execução.
2. [Conclusões](findings/README.md): os achados que impedem interpretações incorretas.
3. [Proatividade](components/proactivity/README.md): como o resultado de trabalho silencioso chega ao pai e onde a origem da decisão permanece desconhecida.
4. [Turnos](components/turns/README.md), [inferência](components/inference/README.md), [ferramentas](components/tools/README.md): ciclo central.
5. [Memória](components/memory/README.md), [subagentes](components/subagents/README.md), [transcripts](components/transcripts/README.md): estado e continuidade.
6. [Catálogo](../mapped/README.md): cada módulo e função nomeada, com vínculos para a implementação.

## Componentes

| Componente | O que o README explica |
| --- | --- |
| [Bootstrap](components/bootstrap/README.md) | Processo, lock, extensões, descoberta do gateway, encerramento |
| [Gateway](components/gateway/README.md) | HTTP, SSE, schemas, dispatch, proxy temporal e recusa BOX |
| [Scheduling](components/scheduling/README.md) | Filas user/agent/background, serialização por agente e watchdog |
| [Turns](components/turns/README.md) | Composição, início, checkpoints, conclusão e diferenças entre bundles |
| [Inference](components/inference/README.md) | Factory de sessão, executor de prompt, streaming e fronteira de modelo |
| [Tools](components/tools/README.md) | Construção do catálogo, manifestos por tipo de agente e execução |
| [Prompts](components/prompts/README.md) | Seções, identidade, contexto, permissões e congelamento |
| [Proactivity](components/proactivity/README.md) | Oportunidade, automação, trabalho silencioso e comunicação com o pai |
| [Automations](components/automations/README.md) | Definição, agenda, IDs, sincronização e execução |
| [Background wakes](components/background-wakes/README.md) | WakeParent, revival, entrega e caminhos aposentados |
| [Primary bot](components/primary-bot/README.md) | Seleção do agente principal e limites dessa responsabilidade |
| [Subagents](components/subagents/README.md) | Tipos, herança, exclusões, execução e resultados |
| [Memory](components/memory/README.md) | Escopos, formatos, busca, escrita, extração pós-turno e Dream |
| [Context compaction](components/context-compaction/README.md) | Sumarização, limiares, compactação ociosa e continuidade |
| [Transcripts](components/transcripts/README.md) | Escrita, leitura, publicação, watch remoto e indexação |
| [Tasks](components/tasks/README.md) | Documento de tarefa, transcript próprio e distinção de delegações |
| [Skills](components/skills/README.md) | Descoberta, normalização, conteúdo e versões visíveis |
| [Approvals](components/approvals/README.md) | Revisão, políticas, expiração e efeitos externos |
| [Browser and computer](components/browser-computer/README.md) | Execução em computador, ferramentas de navegador e fronteiras |
| [Integrations](components/integrations/README.md) | MCP, descoberta, autenticação e chamadas externas |
| [Isolation](components/isolation/README.md) | Workers, armazenamento, capacidade e limites de isolamento |
| [Cancellation and recovery](components/cancellation-recovery/README.md) | Abort, troca de geração, pausa e recuperação |
| [Budgets and recovery](components/budgets-recovery/README.md) | Limites de passos, deadline, timeouts e falhas consecutivas |
| [Observability](components/observability/README.md) | Telemetria, correlação, diagnósticos e sinais de desempenho |
| [Group messaging](components/group-messaging/README.md) | Conversas de grupo, orquestração e entrega |

## Funções individuais

[Funções centrais explicadas manualmente](functions/README.md) aprofunda os contratos mais importantes. O [catálogo gerado](../mapped/README.md) oferece uma ficha README para cada um dos 14.935 nomes qualificados selecionados, inclusive funções auxiliares e métodos internos.

Cada ficha preserva as ocorrências por bundle. Contagens de AST e listas de chamadas são fatos sintáticos, não garantias de que o código foi executado ou de que a chamada dinâmica resolve para uma implementação específica.

## Como avaliar uma afirmação

| Nível | Significado |
| --- | --- |
| Implementação estática | Corpo de função, condições e chamadas presentes no arquivo |
| Contrato recuperado | Schema, interface compilada, mensagem ou RPC identificado |
| Inferência delimitada | Interpretação derivada das ligações, explicitamente indicada |
| Fronteira não disponível | Implementação remota ou configuração não fornecida |
| Execução observada | Exige runtime e evidência de resultado; não foi realizada neste estudo |

[Método e limites](methodology/README.md) · [Cobertura](coverage/README.md) · [Referências](../reference/README.md)
