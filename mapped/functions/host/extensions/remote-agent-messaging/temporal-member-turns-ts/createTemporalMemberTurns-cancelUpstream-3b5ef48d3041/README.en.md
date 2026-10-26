# `createTemporalMemberTurns/cancelUpstream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/remote-agent-messaging/temporal-member-turns.ts` · [Module README](../../../../../../modules/host/extensions/remote-agent-messaging/temporal-member-turns-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708341-708343](../../../../../../../reference/runtime/host-main.cjs#L708341-L708343) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708341-708343](../../../../../../../reference/runtime/host-main.cjs#L708341-L708343) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:708341

Calls written directly in this body: `.catch`, `deps.client.cancelGrokBotRoomMemberTurn`.

SHA-256 of the source span: `69fd512f1f7583af369c646de0987013e6929448118d68a0e6321307bda075ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
