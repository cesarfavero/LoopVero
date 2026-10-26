# `SendPipeline.appendSendMessageEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/send-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740205-740208](../../../../../../../reference/runtime/host-main.cjs#L740205-L740208) | `method` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740205-740208](../../../../../../../reference/runtime/host-main.cjs#L740205-L740208) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:740205

Calls written directly in this body: `this.boxRequests.trackBoxRequestEntry`, `this.tm.appendEntry`.

SHA-256 of the source span: `0a4990f1249a099731e44d3c7d2d01c723ceec8a4e54df4867b74718355575ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
