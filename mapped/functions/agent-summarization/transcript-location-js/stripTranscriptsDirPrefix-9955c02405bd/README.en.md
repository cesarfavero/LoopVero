# `stripTranscriptsDirPrefix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-summarization/transcript-location.js` · [Module README](../../../../modules/agent-summarization/transcript-location-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:619894-619897](../../../../../reference/runtime/host-main.cjs#L619894-L619897) | `FunctionDeclaration` | no | `relativePath` |
| [evaluation:304248-304251](../../../../../reference/runtime/sand-eval-runner.cjs#L304248-L304251) | `FunctionDeclaration` | no | `relativePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619894-619897](../../../../../reference/runtime/host-main.cjs#L619894-L619897) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304248-304251](../../../../../reference/runtime/sand-eval-runner.cjs#L304248-L304251) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:619894

Calls written directly in this body: `relativePath.slice`, `relativePath.startsWith`.

SHA-256 of the source span: `15d04b536a94dd4b0aa731570bff847a436f9ad88249d438408a08836a8c7d77`.

### evaluation:304248

Calls written directly in this body: `relativePath.slice`, `relativePath.startsWith`.

SHA-256 of the source span: `15d04b536a94dd4b0aa731570bff847a436f9ad88249d438408a08836a8c7d77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
