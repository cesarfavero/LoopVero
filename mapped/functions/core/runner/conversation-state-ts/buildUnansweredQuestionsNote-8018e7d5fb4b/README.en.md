# `buildUnansweredQuestionsNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529210-529315](../../../../../../reference/runtime/sand-eval-runner.cjs#L529210-L529315) | `FunctionDeclaration` | no | `prompts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529210-529315](../../../../../../reference/runtime/sand-eval-runner.cjs#L529210-L529315) | 19 | 0 | 0 | 2 | 0 | 0 |

### evaluation:529210

Calls written directly in this body: `.flatMap`, `.join`, `clean`, `discardedDrafts.map`, `dismissed.map`, `hiddenPromptMarker`, `sections.join`, `sections.push`, `skippedQuestionsSection`, `unconfirmedDrafts.map`, `unseenCardChoices.map`, `unseenCloudAgentReports.map`, `unseenPostedLines.map`, `unseenWakeOutcomes.map`.

SHA-256 of the source span: `f71f4d53e87b328184460caa19cf579f025ccf03ed08e1202380998a7706abb3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
