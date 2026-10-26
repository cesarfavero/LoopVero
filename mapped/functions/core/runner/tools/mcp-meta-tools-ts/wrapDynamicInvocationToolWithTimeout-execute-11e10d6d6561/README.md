# `wrapDynamicInvocationToolWithTimeout/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554214-554283](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554214-L554283) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554214-554283](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554214-L554283) | 9 | 1 | 1 | 1 | 2 | 1 |

### evaluation:554214

Chamadas escritas diretamente neste corpo: `callSpan.end`, `createMcpPauseCancelledError`, `ctx.withCancel`, `guarded.execute`, `invokesDesignatedDangerousMcpTool`, `isIntentionalAbortReason2`, `parseDynamicInvocationArgs`, `performance.now`, `registerPauseCancel`, `reportDynamicOutcome`, `resolveDynamicDispatch`, `sandToolCallExecutionTimeoutMs`, `startDynamicToolCallSpan`, `unreachableToolError`, `unregisterPauseCancel`, `wrapToolWithTimeout`.

Alvos de atribuição ou incremento: `rawArgs`.

Alvos de lançamento explícito: `createMcpPauseCancelledError`, `error63`.

SHA-256 do trecho: `a69f437ebf22fce57fb19f27ce5254ebceb4d0c760bcfd2c0ef20b1c777c4467`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
