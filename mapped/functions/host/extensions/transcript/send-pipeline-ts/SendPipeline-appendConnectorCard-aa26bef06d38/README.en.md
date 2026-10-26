# `SendPipeline.appendConnectorCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/send-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740212-740224](../../../../../../../reference/runtime/host-main.cjs#L740212-L740224) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740212-740224](../../../../../../../reference/runtime/host-main.cjs#L740212-L740224) | 2 | 0 | 1 | 0 | 0 | 0 |

### host:740212

Calls written directly in this body: `Date.now`, `createSendMessageEntry`, `getTranscript`, `nextEntryId`, `this.appendSendMessageEntry`, `this.tm.sessions.ensureActionTarget`.

SHA-256 of the source span: `54b211922fdd5a0fe93d18beaa795b03d19e088e3e9598d4fd1e036f73e251b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
