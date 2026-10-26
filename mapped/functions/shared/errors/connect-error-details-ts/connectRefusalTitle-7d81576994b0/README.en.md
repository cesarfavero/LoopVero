# `connectRefusalTitle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/connect-error-details.ts` · [Module README](../../../../../modules/shared/errors/connect-error-details-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505354-505362](../../../../../../reference/runtime/host-main.cjs#L505354-L505362) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505354-505362](../../../../../../reference/runtime/host-main.cjs#L505354-L505362) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:505354

Calls written directly in this body: `entry.details.title.trim`, `error64.findDetails`, `isConnectRefusal`.

SHA-256 of the source span: `4cc76dce38bc547cfd24291741f8c7ead14f619c002e87d22a2e9bec4879581b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
