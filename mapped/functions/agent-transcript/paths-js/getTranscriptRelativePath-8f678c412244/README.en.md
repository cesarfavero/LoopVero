# `getTranscriptRelativePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/paths.js` · [Module README](../../../../modules/agent-transcript/paths-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509570-509577](../../../../../reference/runtime/host-main.cjs#L509570-L509577) | `FunctionDeclaration` | no | `args` |
| [evaluation:294748-294755](../../../../../reference/runtime/sand-eval-runner.cjs#L294748-L294755) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509570-509577](../../../../../reference/runtime/host-main.cjs#L509570-L509577) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:294748-294755](../../../../../reference/runtime/sand-eval-runner.cjs#L294748-L294755) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:509570

Calls written directly in this body: `getSafeConversationId`.

SHA-256 of the source span: `fa08376dc57344a61819c9617e7ecd03b2120d2a31cf5bc4eac993f8ab33e672`.

### evaluation:294748

Calls written directly in this body: `getSafeConversationId`.

SHA-256 of the source span: `fa08376dc57344a61819c9617e7ecd03b2120d2a31cf5bc4eac993f8ab33e672`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
