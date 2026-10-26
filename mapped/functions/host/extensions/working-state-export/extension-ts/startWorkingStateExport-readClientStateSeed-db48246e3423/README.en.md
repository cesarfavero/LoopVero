# `startWorkingStateExport/readClientStateSeed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786068-786070](../../../../../../../reference/runtime/host-main.cjs#L786068-L786070) | `ArrowFunctionExpression` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786068-786070](../../../../../../../reference/runtime/host-main.cjs#L786068-L786070) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:786068 uses an implicit arrow-function return.

### host:786068

Calls written directly in this body: `sessionStore.summarizeAgentById`, `workingStateExportClientStateSeedFromSummary`.

SHA-256 of the source span: `6ff6a71fe351b26eb0ae3904764a295918351eead4c577922031b0b61549d978`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
