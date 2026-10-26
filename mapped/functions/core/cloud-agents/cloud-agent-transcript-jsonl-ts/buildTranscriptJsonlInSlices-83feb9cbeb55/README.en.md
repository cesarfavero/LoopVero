# `buildTranscriptJsonlInSlices`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-transcript-jsonl.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-transcript-jsonl-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509816-509830](../../../../../../reference/runtime/host-main.cjs#L509816-L509830) | `FunctionDeclaration` | yes | `conversation, slicer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509816-509830](../../../../../../reference/runtime/host-main.cjs#L509816-L509830) | 1 | 2 | 1 | 1 | 0 | 0 |

### host:509816

Calls written directly in this body: `convertConversationMessagesToTrace`, `lines2.push`, `slicer.shouldYield`, `slicer.yield`, `traceLine`, `transcriptJsonlOf`.

SHA-256 of the source span: `7962f61212fd51368271453fa6dfd013714821829862e0edc42f8ddb876f7b87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
