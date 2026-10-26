# `formatTranscriptLocation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-summarization/transcript-location.js` · [Module README](../../../../modules/agent-summarization/transcript-location-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:619822-619824](../../../../../reference/runtime/host-main.cjs#L619822-L619824) | `FunctionDeclaration` | no | `agentTranscriptsFolder, options2` |
| [evaluation:304176-304178](../../../../../reference/runtime/sand-eval-runner.cjs#L304176-L304178) | `FunctionDeclaration` | no | `agentTranscriptsFolder, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619822-619824](../../../../../reference/runtime/host-main.cjs#L619822-L619824) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304176-304178](../../../../../reference/runtime/sand-eval-runner.cjs#L304176-L304178) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:619822

Calls written directly in this body: `formatTranscriptLocationMarkdownSection`, `ownTranscriptRelativePath`, `wrapTranscriptSection`.

SHA-256 of the source span: `fd9fa340a9482d08a5f82f92cb68917f2a0fe2e57db427162689e362fbc92df1`.

### evaluation:304176

Calls written directly in this body: `formatTranscriptLocationMarkdownSection`, `ownTranscriptRelativePath`, `wrapTranscriptSection`.

SHA-256 of the source span: `fd9fa340a9482d08a5f82f92cb68917f2a0fe2e57db427162689e362fbc92df1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
