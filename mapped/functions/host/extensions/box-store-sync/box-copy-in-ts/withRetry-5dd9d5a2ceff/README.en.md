# `withRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483812-483825](../../../../../../../reference/runtime/host-main.cjs#L483812-L483825) | `FunctionDeclaration` | yes | `label, fn, log5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483812-483825](../../../../../../../reference/runtime/host-main.cjs#L483812-L483825) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:483812

Calls written directly in this body: `COPY_IN_CREDENTIAL_RETRY.runWithRetry`.

SHA-256 of the source span: `27b37f53fb3c6b18a0d7a2e47f9fcbc9a4806c8461da64966fe4f40f9e39be96`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
