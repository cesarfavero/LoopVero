# `isValidUsedTokensThreshold`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/background-summarization.js` · [Module README](../../../../modules/agent-summarization/background-summarization-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616764-616766](../../../../../reference/runtime/host-main.cjs#L616764-L616766) | `FunctionDeclaration` | no | `threshold, maxTokens` |
| [evaluation:285304-285306](../../../../../reference/runtime/sand-eval-runner.cjs#L285304-L285306) | `FunctionDeclaration` | no | `threshold, maxTokens` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616764-616766](../../../../../reference/runtime/host-main.cjs#L616764-L616766) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285304-285306](../../../../../reference/runtime/sand-eval-runner.cjs#L285304-L285306) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616764

Calls written directly in this body: `Number.isFinite`, `Number.isSafeInteger`.

SHA-256 of the source span: `bcc8443cdb763495534b8a27848c46ad290e1c287b46a2b80bd8058553173586`.

### evaluation:285304

Calls written directly in this body: `Number.isFinite`, `Number.isSafeInteger`.

SHA-256 of the source span: `bcc8443cdb763495534b8a27848c46ad290e1c287b46a2b80bd8058553173586`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
