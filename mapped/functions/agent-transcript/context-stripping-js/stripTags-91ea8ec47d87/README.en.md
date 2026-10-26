# `stripTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/context-stripping.js` · [Module README](../../../../modules/agent-transcript/context-stripping-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509501-509510](../../../../../reference/runtime/host-main.cjs#L509501-L509510) | `FunctionDeclaration` | no | `text3, patterns` |
| [evaluation:294679-294688](../../../../../reference/runtime/sand-eval-runner.cjs#L294679-L294688) | `FunctionDeclaration` | no | `text3, patterns` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509501-509510](../../../../../reference/runtime/host-main.cjs#L509501-L509510) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:294679-294688](../../../../../reference/runtime/sand-eval-runner.cjs#L294679-L294688) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:509501

Calls written directly in this body: `collapsed.trim`, `result.includes`, `result.replace`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `336d355e20a499d7a87ae595b00ad0502892b8f64a0cfea0f8017f7abe43bb08`.

### evaluation:294679

Calls written directly in this body: `collapsed.trim`, `result.includes`, `result.replace`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `336d355e20a499d7a87ae595b00ad0502892b8f64a0cfea0f8017f7abe43bb08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
