# `prepareMessagesForCompaction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/prepare-messages.js` · [Module README](../../../../modules/agent-summarization/prepare-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620574-620587](../../../../../reference/runtime/host-main.cjs#L620574-L620587) | `FunctionDeclaration` | no | `messages2` |
| [evaluation:304928-304941](../../../../../reference/runtime/sand-eval-runner.cjs#L304928-L304941) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620574-620587](../../../../../reference/runtime/host-main.cjs#L620574-L620587) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304928-304941](../../../../../reference/runtime/sand-eval-runner.cjs#L304928-L304941) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:620574

Calls written directly in this body: `hasUserInfoTag`, `messages2.filter`, `messages2.find`, `messagesForSummarization.slice`.

Assignment or increment targets: `messagesForSummarization`, `userInfoMessage`.

SHA-256 of the source span: `b8af272fc54ab300217b7c663bef182b30ca84eeae2ef1a246b00e55b694e9ee`.

### evaluation:304928

Calls written directly in this body: `hasUserInfoTag`, `messages.filter`, `messages.find`, `messagesForSummarization.slice`.

Assignment or increment targets: `messagesForSummarization`, `userInfoMessage`.

SHA-256 of the source span: `d6117786d8c377a5587040992cd0716d74be57a9005eecd9145b3e9636164a6a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
