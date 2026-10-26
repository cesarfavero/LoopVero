# `isCopyInNativeCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in-failure.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473938-473953](../../../../../../../reference/runtime/host-main.cjs#L473938-L473953) | `FunctionDeclaration` | no | `code` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473938-473953](../../../../../../../reference/runtime/host-main.cjs#L473938-L473953) | 10 | 0 | 0 | 4 | 0 | 0 |

### host:473938

Calls written directly in this body: `Object.hasOwn`.

SHA-256 of the source span: `793134d9d66fc9e6b3bbc36e887618158a67959ddbcf5c420c778cf24639d080`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
