# `TranscriptManager.createAwaitingStateSink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783568-783570](../../../../../../../reference/runtime/host-main.cjs#L783568-L783570) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783568-783570](../../../../../../../reference/runtime/host-main.cjs#L783568-L783570) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783568

Calls written directly in this body: `this.boxHandoff.createAwaitingStateSink`.

SHA-256 of the source span: `22f985a7afb3b68e1e345f4c0fffe19080cfb0e6210b704ca386d2f08719110e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
