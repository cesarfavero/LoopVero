# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/extension.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729647-729701](../../../../../../../reference/runtime/host-main.cjs#L729647-L729701) | `ArrowFunctionExpression` | yes | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729647-729701](../../../../../../../reference/runtime/host-main.cjs#L729647-L729701) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729647

Calls written directly in this body: `context2.onStop`, `createDebouncePolicy`, `createLearningPromptSender`, `createSandCursorBackendClient`, `createTeachRecordingService`, `new AbortController`, `schedulePendingRecovery`.

SHA-256 of the source span: `8b342d141588fc6d3e9b2e87dcffb567539c9d6973693a13a7b5bcb07bfc1f98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
