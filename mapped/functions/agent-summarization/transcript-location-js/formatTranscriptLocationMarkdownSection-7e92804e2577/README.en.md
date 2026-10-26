# `formatTranscriptLocationMarkdownSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-summarization/transcript-location.js` · [Module README](../../../../modules/agent-summarization/transcript-location-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:619871-619893](../../../../../reference/runtime/host-main.cjs#L619871-L619893) | `FunctionDeclaration` | no | `agentTranscriptsFolder, transcriptRelativePath` |
| [evaluation:304225-304247](../../../../../reference/runtime/sand-eval-runner.cjs#L304225-L304247) | `FunctionDeclaration` | no | `agentTranscriptsFolder, transcriptRelativePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619871-619893](../../../../../reference/runtime/host-main.cjs#L619871-L619893) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304225-304247](../../../../../reference/runtime/sand-eval-runner.cjs#L304225-L304247) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:619871

Calls written directly in this body: `stripTranscriptsDirPrefix`.

SHA-256 of the source span: `b03b04af194534b95d109ccd5a7cd5c8a7759aa22f760dbaad18844e03625b2a`.

### evaluation:304225

Calls written directly in this body: `stripTranscriptsDirPrefix`.

SHA-256 of the source span: `ab435c23acb0803db6a73491abca38824f12f0f81c6376d3a7369ab0c4ab2056`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
