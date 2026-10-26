# `workingStateExportClientStateSeedFromSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-export-service.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785378-785400](../../../../../../../reference/runtime/host-main.cjs#L785378-L785400) | `FunctionDeclaration` | no | `summary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785378-785400](../../../../../../../reference/runtime/host-main.cjs#L785378-L785400) | 7 | 0 | 0 | 3 | 0 | 0 |

### host:785378

Calls written directly in this body: `Math.floor`, `Math.max`, `Number.isSafeInteger`, `clientStatePreviewOf`.

Assignment or increment targets: `lastMessage`.

SHA-256 of the source span: `0300888003d6d769cf35cc83848e8578c7070f1086d5b3b8de4a978715f90030`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
