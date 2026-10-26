# `pruneRestoredOriginCliStoredLogins/settle3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482912-482922](../../../../../../../reference/runtime/host-main.cjs#L482912-L482922) | `ArrowFunctionExpression` | no | `pathRole, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482912-482922](../../../../../../../reference/runtime/host-main.cjs#L482912-L482922) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:482912

Calls written directly in this body: `errors.push`, `findSystemErrno`, `refusals2.set`.

SHA-256 of the source span: `4f9cfdbd766da8a78fec5d43673a6bf7818d58fcb43f74a8d948a1c073d00547`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
