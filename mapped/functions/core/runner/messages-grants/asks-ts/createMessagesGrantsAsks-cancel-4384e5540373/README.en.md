# `createMessagesGrantsAsks/cancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/messages-grants/asks.ts` · [Module README](../../../../../../modules/core/runner/messages-grants/asks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703086-703100](../../../../../../../reference/runtime/host-main.cjs#L703086-L703100) | `ArrowFunctionExpression` | no | `requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703086-703100](../../../../../../../reference/runtime/host-main.cjs#L703086-L703100) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:703086

Calls written directly in this body: `.dispose`, `ask.waiters.delete`, `ask.waiters.get`, `close`, `deps.clock.schedule`, `takeSettled`, `tombstones.get`, `tombstones.set`, `waiter`.

SHA-256 of the source span: `653f90da3234f4d605c0d05f96956d60b3e5b04d64e80a91e9a1724924157d1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
