# `createTemporalMemberTurns/settle3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/remote-agent-messaging/temporal-member-turns.ts` · [Module README](../../../../../../modules/host/extensions/remote-agent-messaging/temporal-member-turns-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708334-708340](../../../../../../../reference/runtime/host-main.cjs#L708334-L708340) | `ArrowFunctionExpression` | no | `nonce, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708334-708340](../../../../../../../reference/runtime/host-main.cjs#L708334-L708340) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:708334

Calls written directly in this body: `pending.delete`, `pending.get`, `turn.resolve`.

SHA-256 of the source span: `b963826d6338880a1c86ca35dad6700ef4be132c941ca4934a50b6e3a93c467d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
