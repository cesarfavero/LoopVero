# `buildSummarizationPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620826-620940](../../../../../reference/runtime/host-main.cjs#L620826-L620940) | `FunctionDeclaration` | no | `ctx, messages2, options2, serialized = messages2.map((m2) => '${m2.role}: ${turnMessageToString(m2, true)}')` |
| [evaluation:305180-305294](../../../../../reference/runtime/sand-eval-runner.cjs#L305180-L305294) | `FunctionDeclaration` | no | `ctx, messages, options2, serialized = messages.map((m2) => '${m2.role}: ${turnMessageToString(m2, true)}')` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620826-620940](../../../../../reference/runtime/host-main.cjs#L620826-L620940) | 9 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:305180-305294](../../../../../reference/runtime/sand-eval-runner.cjs#L305180-L305294) | 9 | 0 | 0 | 2 | 1 | 0 |

### host:620826

Calls written directly in this body: `Buffer.byteLength`, `Math.floor`, `formatOmittedMessagesPreamble`, `logger38.info`, `logger38.warn`, `messages2.map`, `new CannotTruncatePromptError`, `resultParts.join`, `serialized.at`, `serialized.join`, `truncatePromptFairly`.

Assignment or increment targets: `didByteAdjust`, `oldPromptBudget`, `promptBudget`.

Explicit throw targets: `CannotTruncatePromptError`.

SHA-256 of the source span: `ae029abed396b02b7a876f1160de37004dc97377449fa351c844580672b5a7fd`.

### evaluation:305180

Calls written directly in this body: `Buffer.byteLength`, `Math.floor`, `formatOmittedMessagesPreamble`, `logger13.info`, `logger13.warn`, `messages.map`, `new CannotTruncatePromptError`, `resultParts.join`, `serialized.at`, `serialized.join`, `truncatePromptFairly`.

Assignment or increment targets: `didByteAdjust`, `oldPromptBudget`, `promptBudget`.

Explicit throw targets: `CannotTruncatePromptError`.

SHA-256 of the source span: `67292a8ba941f9392a42e4c854cff587e867df893f2e3b9d1242b7d147772b50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
