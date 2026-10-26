# `createDraftExternalMessageTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755432-755523](../../../../../../../reference/runtime/host-main.cjs#L755432-L755523) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:541312-541403](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541312-L541403) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755432-755523](../../../../../../../reference/runtime/host-main.cjs#L755432-L755523) | 19 | 0 | 6 | 2 | 4 | 2 |
| [evaluation:541312-541403](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541312-L541403) | 19 | 0 | 6 | 2 | 4 | 2 |

### host:755432

Calls written directly in this body: `Date.now`, `bindMessageDeliveryReport`, `buildDraftEmission`, `cardLocation`, `ctx.signal.throwIfAborted`, `d.cardHiddenFromChannel`, `d.onDraftMessage`, `d.proposeRule`, `d.resolveRouteVerification`, `draftDeliverTo`, `emission.message.draft.to.join`, `isAgentInboxRoute`, `meetingDraftMessage`, `new DraftRefusedError`, `nonEmpty4`, `reportDelivery.failed`, `reportDelivery.settled`, `requirePresent`, `resolveAgentInboxDraft`, `resolveCardTaskThread`, `verifyDraftAgainstRoute`.

Assignment or increment targets: `deliverTo`, `deliverTo2`, `draftId`, `draftId2`, `emission`, `taskId`, `taskId2`.

Explicit throw targets: `DraftRefusedError`, `error64`, `refusal4`.

SHA-256 of the source span: `fff2fe3ccdd0349761431b42d7210cd50018b054a5cea994fffa56fd85677ed6`.

### evaluation:541312

Calls written directly in this body: `Date.now`, `bindMessageDeliveryReport`, `buildDraftEmission`, `cardLocation`, `ctx.signal.throwIfAborted`, `d.cardHiddenFromChannel`, `d.onDraftMessage`, `d.proposeRule`, `d.resolveRouteVerification`, `draftDeliverTo`, `emission.message.draft.to.join`, `isAgentInboxRoute`, `meetingDraftMessage`, `new DraftRefusedError`, `nonEmpty2`, `reportDelivery.failed`, `reportDelivery.settled`, `requirePresent`, `resolveAgentInboxDraft`, `resolveCardTaskThread`, `verifyDraftAgainstRoute`.

Assignment or increment targets: `deliverTo`, `deliverTo2`, `draftId`, `draftId2`, `emission`, `taskId`, `taskId2`.

Explicit throw targets: `DraftRefusedError`, `error63`, `refusal4`.

SHA-256 of the source span: `042df5335b2e0e8ee9e6a5192d74b96acd8dea76b52e72247ee31c819fae9afa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
