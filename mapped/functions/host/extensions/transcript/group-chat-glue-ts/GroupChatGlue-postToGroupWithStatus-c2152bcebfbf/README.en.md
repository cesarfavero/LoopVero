# `GroupChatGlue.postToGroupWithStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738343-738415](../../../../../../../reference/runtime/host-main.cjs#L738343-L738415) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738343-738415](../../../../../../../reference/runtime/host-main.cjs#L738343-L738415) | 5 | 0 | 2 | 6 | 0 | 2 |

### host:738343

Calls written directly in this body: `Date.now`, `__callDispose`, `__using`, `brandedId`, `clampAgentMessage`, `config2.memberIds.includes`, `isAgentAbsent`, `isPassContent`, `reportFallback`, `textGroupPost`, `this.deliveryFor`, `this.groupIdentityFor`, `this.localGroupConfig`, `this.postGroupMemberMessage`, `this.resolveGroupMembers`, `this.tm.backgroundWakes.appendAgentOutboundEntry`, `this.tm.productAnalytics.trackEvent`, `this.tm.runLifecycle.beginSessionRun`, `this.tm.runLifecycle.enqueueExclusiveRun`, `this.tm.sendPipeline.nextTurnEpoch`, `this.tm.sessions.leaseBackgroundSession`.

Assignment or increment targets: `leased`.

SHA-256 of the source span: `54bcca90054b05857a81b6f534608aea0caabaf5069ce120a5e8611028afb6b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
