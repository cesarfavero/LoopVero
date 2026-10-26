# `createMessagesGrantsAsks/awaitAsk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/messages-grants/asks.ts` · [Module README](../../../../../../modules/core/runner/messages-grants/asks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703107-703127](../../../../../../../reference/runtime/host-main.cjs#L703107-L703127) | `FunctionExpression` | no | `{ requestId: requestId2, waitMs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703107-703127](../../../../../../../reference/runtime/host-main.cjs#L703107-L703127) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:703107

Calls written directly in this body: `Math.max`, `Math.min`, `Number.isFinite`, `Promise.resolve`, `new Promise`, `state.ask.waiters.has`, `takeSettled`, `tombstones.has`.

SHA-256 of the source span: `2b4107c1a0c11d386ef28bfbeb0ed066e195bfe8363546f67d2e999a845b2c56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
