# `ownTranscriptRelativePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-summarization/transcript-location.js` · [Module README](../../../../modules/agent-summarization/transcript-location-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:619851-619870](../../../../../reference/runtime/host-main.cjs#L619851-L619870) | `FunctionDeclaration` | no | `options2` |
| [evaluation:304205-304224](../../../../../reference/runtime/sand-eval-runner.cjs#L304205-L304224) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619851-619870](../../../../../reference/runtime/host-main.cjs#L619851-L619870) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304205-304224](../../../../../reference/runtime/sand-eval-runner.cjs#L304205-L304224) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:619851

Calls written directly in this body: `getTranscriptRelativePath`.

SHA-256 of the source span: `42c133034927e52fe89e295e97e65959ebd79230a4ebee0922f57ab9acedccb6`.

### evaluation:304205

Calls written directly in this body: `getTranscriptRelativePath`.

SHA-256 of the source span: `42c133034927e52fe89e295e97e65959ebd79230a4ebee0922f57ab9acedccb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
