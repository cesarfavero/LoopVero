# `readBlobBodies`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714405-714417](../../../../../../../reference/runtime/host-main.cjs#L714405-L714417) | `FunctionDeclaration` | yes | `client, listed, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714405-714417](../../../../../../../reference/runtime/host-main.cjs#L714405-L714417) | 3 | 1 | 1 | 2 | 1 | 0 |

### host:714405

Calls written directly in this body: `.filter`, `client.readBlobs`, `hashes.add`, `new Map`, `new ServerTranscriptBlobReadError`, `new Set`.

Explicit throw targets: `ServerTranscriptBlobReadError`.

SHA-256 of the source span: `d6942c6febaf529459052024ac3334c9f311b0f0961091478b41e0a8242e01c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
