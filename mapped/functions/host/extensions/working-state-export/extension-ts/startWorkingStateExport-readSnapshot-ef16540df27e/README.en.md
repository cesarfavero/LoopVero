# `startWorkingStateExport/readSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786078-786078](../../../../../../../reference/runtime/host-main.cjs#L786078-L786078) | `ArrowFunctionExpression` | no | `agentId, limits, onProgress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786078-786078](../../../../../../../reference/runtime/host-main.cjs#L786078-L786078) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786078 uses an implicit arrow-function return.

### host:786078

Calls written directly in this body: `sessionStore.readWorkingStateExportSnapshot`.

SHA-256 of the source span: `0f2d465f93a10f296207a169956926f846ad968c9a2f33171cbc538093c06cfd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
