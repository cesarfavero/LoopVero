# `buildTranscriptJsonl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-transcript-jsonl.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-transcript-jsonl-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509812-509815](../../../../../../reference/runtime/host-main.cjs#L509812-L509815) | `FunctionDeclaration` | no | `conversation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509812-509815](../../../../../../reference/runtime/host-main.cjs#L509812-L509815) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509812

Calls written directly in this body: `convertConversationMessagesToTrace`, `trace2.map`, `transcriptJsonlOf`.

SHA-256 of the source span: `9a842c6e1e18d6fa2fbbbff3ef839466fa98bc2520f86ddbf5f3590c80b9657d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
