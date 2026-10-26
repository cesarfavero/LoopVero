# `isTranscriptWindowEdgeBarrier`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript-window-edge.ts` · [Module README](../../../../../modules/shared/transcript/transcript-window-edge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712685-712700](../../../../../../reference/runtime/host-main.cjs#L712685-L712700) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712685-712700](../../../../../../reference/runtime/host-main.cjs#L712685-L712700) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:712685

Calls written directly in this body: `isAgentPeerMessageEntry`, `isValidTimestampMs`.

SHA-256 of the source span: `e53238b9733132d74811bf1ec03e5c6813c1be3dcc59c62219a9d1579bbdf31d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
