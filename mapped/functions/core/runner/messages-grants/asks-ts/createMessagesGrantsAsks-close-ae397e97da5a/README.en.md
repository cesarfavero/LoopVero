# `createMessagesGrantsAsks/close`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/messages-grants/asks.ts` · [Module README](../../../../../../modules/core/runner/messages-grants/asks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703052-703055](../../../../../../../reference/runtime/host-main.cjs#L703052-L703055) | `ArrowFunctionExpression` | no | `ask` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703052-703055](../../../../../../../reference/runtime/host-main.cjs#L703052-L703055) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:703052

Calls written directly in this body: `ask.expiry.dispose`.

Assignment or increment targets: `state`.

SHA-256 of the source span: `15d5bf51fcfb7fd4d17725135bce8425b8b2b661c7260015e4dcb425c88015c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
