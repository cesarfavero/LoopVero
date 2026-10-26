# `createMessagesGrantsAsks/request`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/messages-grants/asks.ts` · [Module README](../../../../../../modules/core/runner/messages-grants/asks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703145-703158](../../../../../../../reference/runtime/host-main.cjs#L703145-L703158) | `FunctionExpression` | no | `ask` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703145-703158](../../../../../../../reference/runtime/host-main.cjs#L703145-L703158) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:703145

Calls written directly in this body: `Promise.resolve`, `attach`, `new Promise`.

SHA-256 of the source span: `fbf4c75abacad93d6d1346cbca468f5e7294872b9e5b29e6fe692966e63a909a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
