# `startWorkingStateExport/listAgentPopulation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786109-786113](../../../../../../../reference/runtime/host-main.cjs#L786109-L786113) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786109-786113](../../../../../../../reference/runtime/host-main.cjs#L786109-L786113) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:786109

Calls written directly in this body: `boxAgentPopulation`, `context2.deps.transcript.liveRunningAgentIds`, `sessionStore.listAgentIds`.

SHA-256 of the source span: `28892db276f5f8c25ba04c6937edb6aa19907082cbc7db63f245229411221c55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
