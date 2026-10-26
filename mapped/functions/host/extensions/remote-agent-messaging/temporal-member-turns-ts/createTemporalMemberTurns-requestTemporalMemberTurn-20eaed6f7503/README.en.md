# `createTemporalMemberTurns/requestTemporalMemberTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/remote-agent-messaging/temporal-member-turns.ts` · [Module README](../../../../../../modules/host/extensions/remote-agent-messaging/temporal-member-turns-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708345-708414](../../../../../../../reference/runtime/host-main.cjs#L708345-L708414) | `FunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708345-708414](../../../../../../../reference/runtime/host-main.cjs#L708345-L708414) | 8 | 0 | 2 | 6 | 0 | 2 |

### host:708345

Calls written directly in this body: `.map`, `BigInt`, `args.peers.map`, `cancelUpstream`, `deps.client.requestGrokBotRoomMemberTurn`, `deps.clock.now`, `deps.mintNonce`, `deps.reportFailure`, `deps.turnDeadline.run`, `errorLogTag`, `new Promise`, `parseAgentId`, `pending.delete`, `settle3`, `toRoomTurnMessages`.

Assignment or increment targets: `dispatch`.

SHA-256 of the source span: `bdc35014d357cc99c571596c7dfb348dbd64b4b68678c42dd6ecaecff2bc67d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
