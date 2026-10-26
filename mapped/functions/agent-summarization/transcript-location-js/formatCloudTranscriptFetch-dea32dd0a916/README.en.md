# `formatCloudTranscriptFetch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-summarization/transcript-location.js` · [Module README](../../../../modules/agent-summarization/transcript-location-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:619825-619839](../../../../../reference/runtime/host-main.cjs#L619825-L619839) | `FunctionDeclaration` | no | `bcId, options2` |
| [evaluation:304179-304193](../../../../../reference/runtime/sand-eval-runner.cjs#L304179-L304193) | `FunctionDeclaration` | no | `bcId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619825-619839](../../../../../reference/runtime/host-main.cjs#L619825-L619839) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304179-304193](../../../../../reference/runtime/sand-eval-runner.cjs#L304179-L304193) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:619825

Calls written directly in this body: `JSON.stringify`, `wrapTranscriptSection`.

SHA-256 of the source span: `983f77a429f1b20258385120692a226e77bac4b1408006306fddb0bd0cba762d`.

### evaluation:304179

Calls written directly in this body: `JSON.stringify`, `wrapTranscriptSection`.

SHA-256 of the source span: `983f77a429f1b20258385120692a226e77bac4b1408006306fddb0bd0cba762d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
