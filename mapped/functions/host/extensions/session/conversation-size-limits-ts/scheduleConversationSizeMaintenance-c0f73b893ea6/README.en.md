# `scheduleConversationSizeMaintenance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-size-limits.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-size-limits-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719392-719418](../../../../../../../reference/runtime/host-main.cjs#L719392-L719418) | `FunctionDeclaration` | no | `host, dbPath, db` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719392-719418](../../../../../../../reference/runtime/host-main.cjs#L719392-L719418) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:719392

Calls written directly in this body: `Date.now`, `blobDbPathFor`, `isConversationGcEnabled`, `softGcStateByBlobDbPath.get`, `softGcStateByBlobDbPath.set`.

Assignment or increment targets: `state.inFlight`, `state.lastRunMs`.

SHA-256 of the source span: `a30b778db8ac63d6b4700db56aafe9bd6c1d6961a06bdf399e41963b0aa60f3b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
