# `buildWatchResult/quote3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512631-512634](../../../../../../reference/runtime/host-main.cjs#L512631-L512634) | `ArrowFunctionExpression` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512631-512634](../../../../../../reference/runtime/host-main.cjs#L512631-L512634) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:512631 uses an implicit arrow-function return.

### host:512631

Calls written directly in this body: `bcId.trim`, `quoteReport`.

SHA-256 of the source span: `ebf4701fc843f9a9eecbfe31cafef46841b88655fd4ffbb388935046a9ab0e12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
