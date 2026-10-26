# `shouldPersistBackgroundSummarization`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/background-summarization.js` · [Module README](../../../../modules/agent-summarization/background-summarization-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616790-616793](../../../../../reference/runtime/host-main.cjs#L616790-L616793) | `FunctionDeclaration` | no | `usedTokens, maxTokens, props` |
| [evaluation:285330-285333](../../../../../reference/runtime/sand-eval-runner.cjs#L285330-L285333) | `FunctionDeclaration` | no | `usedTokens, maxTokens, props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616790-616793](../../../../../reference/runtime/host-main.cjs#L616790-L616793) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285330-285333](../../../../../reference/runtime/sand-eval-runner.cjs#L285330-L285333) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616790

Calls written directly in this body: `isValidUsedTokensThreshold`, `shouldStartBackgroundSummarization`.

SHA-256 of the source span: `f212854bed68052304011588401738c6a3b90646349a9c3927b9f9dbfd6a9ae5`.

### evaluation:285330

Calls written directly in this body: `isValidUsedTokensThreshold`, `shouldStartBackgroundSummarization`.

SHA-256 of the source span: `f212854bed68052304011588401738c6a3b90646349a9c3927b9f9dbfd6a9ae5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
