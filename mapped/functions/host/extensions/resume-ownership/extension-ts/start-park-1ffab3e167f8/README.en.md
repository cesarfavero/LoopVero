# `start/park`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708912-708912](../../../../../../../reference/runtime/host-main.cjs#L708912-L708912) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708912-708912](../../../../../../../reference/runtime/host-main.cjs#L708912-L708912) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708912 uses an implicit arrow-function return.

### host:708912

Calls written directly in this body: `transcript.parkResumeAfterIdentityReconcileFailure`.

SHA-256 of the source span: `183506aaae58cab3c5c2c8d883d2501cf36def8d32e676a32647a4eb94ddfb87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
