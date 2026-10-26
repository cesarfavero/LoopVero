# `deriveTranscriptExtras`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `host/extensions/session/session-summaries.ts` · [Module README](../../../../../../modules/host/extensions/session/session-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722532-722541](../../../../../../../reference/runtime/host-main.cjs#L722532-L722541) | `FunctionDeclaration` | no | `db, agentId, firstLimit = PREVIEW_TAIL_FIRST_LIMIT` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722532-722541](../../../../../../../reference/runtime/host-main.cjs#L722532-L722541) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:722532

Calls written directly in this body: `db.getTranscriptEntries`, `db.getTranscriptTail`, `previewsSettledWithin`, `transcriptExtrasFrom`.

Assignment or increment targets: `limit3`.

SHA-256 of the source span: `9fe360cecb94d63426dc4f9832798f0f0ca349c95f58ffc9ba3fb8ce8c0af1b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
