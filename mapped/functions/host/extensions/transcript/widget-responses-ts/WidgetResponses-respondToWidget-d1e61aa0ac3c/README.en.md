# `WidgetResponses.respondToWidget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782484-782512](../../../../../../../reference/runtime/host-main.cjs#L782484-L782512) | `method` | yes | `entryId, value, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782484-782512](../../../../../../../reference/runtime/host-main.cjs#L782484-L782512) | 6 | 0 | 3 | 4 | 1 | 1 |

### host:782484

Calls written directly in this body: `buildWidgetAnswerNote`, `describeRepliedMessageQuote`, `findEntry`, `this.recordWidgetResponse`, `this.rollbackWidgetResponse`, `this.tm.groupChat.isGroupSession`, `this.tm.sendPrompt`, `this.tm.sessions.ensureActionTarget`, `value.trim`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `0154fc6e9b5088daf25cfedfd0c7f767b1108ea30c46e298b18929e94ce2f609`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
