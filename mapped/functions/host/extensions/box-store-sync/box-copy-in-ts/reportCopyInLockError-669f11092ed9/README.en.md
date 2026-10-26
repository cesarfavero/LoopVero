# `reportCopyInLockError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483711-483719](../../../../../../../reference/runtime/host-main.cjs#L483711-L483719) | `FunctionDeclaration` | no | `log5, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483711-483719](../../../../../../../reference/runtime/host-main.cjs#L483711-L483719) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:483711

Calls written directly in this body: `errorMessage`, `log5`, `logRefusals`.

SHA-256 of the source span: `eb15d66289e849ed3d0eec1d86b792a495add737b3dee545ba72eb8049130490`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
