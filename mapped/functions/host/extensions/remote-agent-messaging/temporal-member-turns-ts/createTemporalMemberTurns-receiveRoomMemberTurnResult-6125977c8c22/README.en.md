# `createTemporalMemberTurns/receiveRoomMemberTurnResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/remote-agent-messaging/temporal-member-turns.ts` · [Module README](../../../../../../modules/host/extensions/remote-agent-messaging/temporal-member-turns-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708415-708430](../../../../../../../reference/runtime/host-main.cjs#L708415-L708430) | `FunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708415-708430](../../../../../../../reference/runtime/host-main.cjs#L708415-L708430) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:708415

Calls written directly in this body: `.filter`, `.map`, `args.messages.filter`, `groupPostsFromWire`, `parseTemporalMemberTurnOutcome`, `pending.get`, `settle3`.

SHA-256 of the source span: `456ae93fb5d5a854a3e8fef8ec652e809e141d98093f7be08a2dce30c6fb9880`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
