# `createPromptCollectorGlue/assembleTurnAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533858-534006](../../../../../../reference/runtime/sand-eval-runner.cjs#L533858-L534006) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533858-534006](../../../../../../reference/runtime/sand-eval-runner.cjs#L533858-L534006) | 14 | 0 | 3 | 1 | 0 | 0 |

### evaluation:533858

Calls written directly in this body: `.filter`, `.join`, `.map`, `.some`, `allowsSystemReminder`, `appendUserMessageReminders`, `args.compactionEpoch`, `attachedFilePaths.map`, `automationWakeTrustMarker`, `backgroundResultNoteForPrompt`, `buildAttachedFilesNote`, `buildUnansweredQuestionsNote`, `buildUserMessageLeadingNotes`, `freshMessageIds.add`, `getAutomationStatusReminderForTurn`, `hiddenPromptMarker`, `host.gates.backgroundResultNote`, `host.gates.remindersOutsideUserQuery`, `host.gates.renamedPromptMarkers`, `host.gates.sandUiMap`, `host.gates.typedCardReply`, `host.gates.typedCardReplyChatFollowup`, `host.gates.unansweredCardOnWake`, `host.gates.widgetV0`, `host.resolveBoxId`, `isAgentStartedPrompt`, `joinNonEmpty`, `new ConversationAction`, `new SelectedContext`, `new Set`, `new UserMessage`, `new UserMessageAction`, `options2.messageId.trim`, `options2.richText.trim`, `peerWakeApprovalReminderFor`, `prependUserMessages.push`, `readSubagentImageAttachments`, `resolveSelectedVideosForTurn`, `sandSubagentToolName`, `selectedImageInputs.flatMap`, `selectedImageInputs.map`, `traceSendPhase`, `turnNotes.flatMap`, `turnNotes.reduce`, `userMessageReminderBodies`.

SHA-256 of the source span: `d192603ac5ce5df5f7e2e1515c6db2b600e8cc3e82e855643680ad875d5f1c90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
