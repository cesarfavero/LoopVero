# `perform`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-action-core.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-action-core-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:710251-710749](../../../../../../../reference/runtime/host-main.cjs#L710251-L710749) | `FunctionDeclaration` | yes | `client, request5, deviceTimeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710251-710749](../../../../../../../reference/runtime/host-main.cjs#L710251-L710749) | 68 | 0 | 28 | 49 | 0 | 0 |

### host:710251

Calls written directly in this body: `BigInt`, `Date.now`, `Number`, `acceptanceLookupOf`, `approvalResolutionProto`, `client.beginGrokBotSpendApproval`, `client.createGrokBotThreadFromMessage`, `client.discardGrokBotDraft`, `client.dismissGrokBotUserForm`, `client.dismissGrokBotWidget`, `client.endGrokBotBoxHandoff`, `client.getGrokBotSendStatus`, `client.interruptGrokBotAgentRun`, `client.listGrokBotStripeLinkPaymentMethods`, `client.listGrokBotSubagents`, `client.reactToGrokBotMessage`, `client.resolveGrokBotAutoReviewApproval`, `client.resolveGrokBotConnectorGrant`, `client.resolveGrokBotCredentialRequest`, `client.resolveGrokBotLocalToolPermission`, `client.resolveGrokBotVirtualCardApproval`, `client.respondGrokBotWidget`, `client.rollBackGrokBotConversation`, `client.sendGrokBotDraft`, `client.sendGrokBotUserMessage`, `client.setGrokBotAgentClientState`, `client.setGrokBotAgentDraftingDisabled`, `client.startFreshGrokBotConversation`, `client.submitGrokBotSecret`, `client.submitGrokBotUserForm`, `client.voteGrokBotFeedback`, `clientSurfaceProto`, `connectorGrantResolutionProto`, `credentialRequestResolutionProto`, `deviceTimeZone`, `draftProto`, `feedbackActionProto`, `firstSentAgeField`, `handBackTriggerProto`, `localToolPermissionResolutionProto`, `messageInitiatorProto`, `mobileSendSourceProto`, `paymentMethodsResultOf`, `refused`, `response.subagents.map`, `secretSaveRefused`, `sendableDeviceTimeZone`, `sessionIdField`, `spendApprovalBeginResultOf`, `staleUserForm`, `unreadableDelivery`, `userFormClientPlatformProto`, `userFormDismissModeProto`, `virtualCardResolutionProto`, `virtualCardResultOf`.

SHA-256 of the source span: `5d16abee6e25861c1d0953ef5e9f33ce0a2be3cf94ccd4b441465b87a7010972`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
