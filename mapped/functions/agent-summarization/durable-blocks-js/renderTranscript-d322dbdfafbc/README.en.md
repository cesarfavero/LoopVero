# `renderTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:619957-619971](../../../../../reference/runtime/host-main.cjs#L619957-L619971) | `FunctionDeclaration` | no | `enrichments, context2, useXml` |
| [evaluation:304311-304325](../../../../../reference/runtime/sand-eval-runner.cjs#L304311-L304325) | `FunctionDeclaration` | no | `enrichments, context2, useXml` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619957-619971](../../../../../reference/runtime/host-main.cjs#L619957-L619971) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304311-304325](../../../../../reference/runtime/sand-eval-runner.cjs#L304311-L304325) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:619957

Calls written directly in this body: `formatCloudTranscriptFetch`, `formatTranscriptLocation`, `section.slice`, `section.startsWith`.

SHA-256 of the source span: `5ae00b8d912152c99d62a5999f3b93087a769ac9f665beba19f2d4175382201b`.

### evaluation:304311

Calls written directly in this body: `formatCloudTranscriptFetch`, `formatTranscriptLocation`, `section.slice`, `section.startsWith`.

SHA-256 of the source span: `5ae00b8d912152c99d62a5999f3b93087a769ac9f665beba19f2d4175382201b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
