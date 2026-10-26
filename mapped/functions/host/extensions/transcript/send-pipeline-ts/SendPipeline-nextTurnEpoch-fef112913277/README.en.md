# `SendPipeline.nextTurnEpoch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/send-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/transcript/send-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740193-740201](../../../../../../../reference/runtime/host-main.cjs#L740193-L740201) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740193-740201](../../../../../../../reference/runtime/host-main.cjs#L740193-L740201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740193

Calls written directly in this body: `this.tm.groupChat.cancelTemporalMemberTurns`, `this.turnEpochs.get`, `this.turnEpochs.set`.

SHA-256 of the source span: `4b6e98db9576081e6736d3d69c31169c423d1749e622beeda7e8f53961d715a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
