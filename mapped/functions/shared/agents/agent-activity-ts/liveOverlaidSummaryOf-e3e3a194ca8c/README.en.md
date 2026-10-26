# `liveOverlaidSummaryOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agent-activity.ts` · [Module README](../../../../../modules/shared/agents/agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490177-490206](../../../../../../reference/runtime/host-main.cjs#L490177-L490206) | `FunctionDeclaration` | no | `summary, live` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490177-490206](../../../../../../reference/runtime/host-main.cjs#L490177-L490206) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:490177

Calls written directly in this body: `areAgentActivitiesEqual`, `areAwaitingStatesEqual`, `areBoxHandoffsEqual`, `areGroupTurnListsEqual`, `areSessionIdListsEqual`, `liveOverlayRunningTurn`.

SHA-256 of the source span: `953ab4f94bc42479565122184e78734680db2307864cf8e6c461890d3f5d7d97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
