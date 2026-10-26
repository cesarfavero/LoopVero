# `materialize2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-store.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733091-733097](../../../../../../../reference/runtime/host-main.cjs#L733091-L733097) | `FunctionDeclaration` | no | `entries, storedIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733091-733097](../../../../../../../reference/runtime/host-main.cjs#L733091-L733097) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:733091

Calls written directly in this body: `byId.has`, `byId.set`, `new Map`.

SHA-256 of the source span: `9234d9c430919e9b005c0bda29221649e370c5c6a92e9e62c221b6f1153fd46c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
