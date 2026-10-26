# `emitSummaryLifecycleTerminal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-lifecycle.js` · [README do módulo](../../../../modules/agent-engine/summarization-lifecycle-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647515-647525](../../../../../reference/runtime/host-main.cjs#L647515-L647525) | `FunctionDeclaration` | não | `ctx, source, event` |
| [evaluation:439178-439188](../../../../../reference/runtime/sand-eval-runner.cjs#L439178-L439188) | `FunctionDeclaration` | não | `ctx, source, event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647515-647525](../../../../../reference/runtime/host-main.cjs#L647515-L647525) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439178-439188](../../../../../reference/runtime/sand-eval-runner.cjs#L439178-L439188) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647515

Chamadas escritas diretamente neste corpo: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Alvos de atribuição ou incremento: `lifecycle2.status`.

SHA-256 do trecho: `827c7c8c67493437d3807d68e13ed713efa052ccd88ba7e757885883d7844d55`.

### evaluation:439178

Chamadas escritas diretamente neste corpo: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Alvos de atribuição ou incremento: `lifecycle2.status`.

SHA-256 do trecho: `827c7c8c67493437d3807d68e13ed713efa052ccd88ba7e757885883d7844d55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
