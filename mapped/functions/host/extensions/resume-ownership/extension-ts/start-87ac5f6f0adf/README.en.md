# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708826-708942](../../../../../../../reference/runtime/host-main.cjs#L708826-L708942) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708826-708942](../../../../../../../reference/runtime/host-main.cjs#L708826-L708942) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:708826

Calls written directly in this body: `context2.onStop`, `createRetryPolicy`, `createSandCursorBackendClient`, `new AppliedMigrationBarrier`, `new ResumeOwnershipService`, `turnExecution.setLocalWorkAllowed`.

SHA-256 of the source span: `285781aa99fdcf9e38c32bdcafd15d584693fdb32714ad6a8e3eafa5acb8ae73`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
