# `createTurnAgentComposition/buildAgentForRun/onToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-agent-composition.ts` · [README do módulo](../../../../../modules/core/runner/turn-agent-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588477-588493](../../../../../../reference/runtime/sand-eval-runner.cjs#L588477-L588493) | `ArrowFunctionExpression` | não | `event, callId, toolCall2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588477-588493](../../../../../../reference/runtime/sand-eval-runner.cjs#L588477-L588493) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:588477

Chamadas escritas diretamente neste corpo: `host.observation.noteToolCallModelName`, `host.observation.observeAwaitToolCall`, `isThisRunAwaitingUser`, `mcpAppEmitter.observeToolCall`, `noteToolCallEffect`, `performanceObservation.toolCall`, `sentLinkChecks.noteToolCall`.

SHA-256 do trecho: `2997e141e4ea1faea67e9876b5357fffdb993cf0ce637003a4b0991ad82c1379`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
