# `createSubagentRuntime/dispatchBackgroundSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535239-535288](../../../../../../reference/runtime/sand-eval-runner.cjs#L535239-L535288) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535239-535288](../../../../../../reference/runtime/sand-eval-runner.cjs#L535239-L535288) | 9 | 0 | 0 | 2 | 0 | 0 |

### evaluation:535239

Chamadas escritas diretamente neste corpo: `Date.now`, `backgroundSubagentRuns.get`, `computeSubagentRequestId`, `computerUseSessions.set`, `definedProvenance`, `deriveBackgroundSubagentTitleFields`, `host.activeTurnRequestSource`, `host.getCombinedComputerUseDecision`, `host.getConversationId`, `host.onPendingWakeArmed`, `host.subagentOwnership.assertOpen`, `isComputerUseSubagentType`, `logSubagentLifecycle`, `startBackgroundSubagentTurn`, `subagentMeta.set`, `subagentRegistry.set`.

SHA-256 do trecho: `0da8087825615383bb0764db40ac183b8bd362288c064989e214faf90c2a6c30`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
