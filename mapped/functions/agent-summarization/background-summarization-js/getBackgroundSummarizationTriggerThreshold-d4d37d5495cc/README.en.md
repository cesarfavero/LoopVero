# `getBackgroundSummarizationTriggerThreshold`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/background-summarization.js` · [Module README](../../../../modules/agent-summarization/background-summarization-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616767-616785](../../../../../reference/runtime/host-main.cjs#L616767-L616785) | `FunctionDeclaration` | no | `maxTokens, props` |
| [evaluation:285307-285325](../../../../../reference/runtime/sand-eval-runner.cjs#L285307-L285325) | `FunctionDeclaration` | no | `maxTokens, props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616767-616785](../../../../../reference/runtime/host-main.cjs#L616767-L616785) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:285307-285325](../../../../../reference/runtime/sand-eval-runner.cjs#L285307-L285325) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:616767

Calls written directly in this body: `Math.min`, `candidates.push`, `isValidUsedTokensThreshold`.

SHA-256 of the source span: `f3f8212800384f1fb27abb52ac8a4bfc90e8982edef0d95e98800c34f2b9e036`.

### evaluation:285307

Calls written directly in this body: `Math.min`, `candidates.push`, `isValidUsedTokensThreshold`.

SHA-256 of the source span: `f3f8212800384f1fb27abb52ac8a4bfc90e8982edef0d95e98800c34f2b9e036`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
