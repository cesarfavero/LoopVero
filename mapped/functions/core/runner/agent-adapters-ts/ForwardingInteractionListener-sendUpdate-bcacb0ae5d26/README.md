# `ForwardingInteractionListener.sendUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-adapters.ts` · [README do módulo](../../../../../modules/core/runner/agent-adapters-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583207-583267](../../../../../../reference/runtime/sand-eval-runner.cjs#L583207-L583267) | `method` | sim | `ctx, update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583207-583267](../../../../../../reference/runtime/sand-eval-runner.cjs#L583207-L583267) | 15 | 0 | 1 | 1 | 0 | 0 |

### evaluation:583207

Chamadas escritas diretamente neste corpo: `STREAM_UPDATE_CASES.has`, `SURFACE_UNRESOLVED_TOOL_CASES.has`, `ctx.get`, `getOutlineToolCallName`, `getOutlineToolCallStatus`, `getOutlineToolCallSummary`, `getToolCallActivityArgs`, `process.stderr.write`, `super.sendUpdate`, `this.observers.onSummaryLifecycle`, `this.observers.onSurfaceUnresolvedPending`, `this.observers.onToolCall`, `this.observers.resolveToolName`, `this.onUpdate`, `turnUsageFromTurnEnded`.

Alvos de atribuição ou incremento: `this.staleDropLogged`.

SHA-256 do trecho: `e2c0c6cafa6fc28316e1f14cf7133e22a65c8a6138b13d5388843ee5ed389ebd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
