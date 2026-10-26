# `copyInFailureOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in-failure.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473954-473989](../../../../../../../reference/runtime/host-main.cjs#L473954-L473989) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473954-473989](../../../../../../../reference/runtime/host-main.cjs#L473954-L473989) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:473954

Calls written directly in this body: `new Set`, `read2`.

SHA-256 of the source span: `cf0e732e2ef8342aab1358a8fa2edfb954592acea8ad30033711e7c25e6f9c44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
