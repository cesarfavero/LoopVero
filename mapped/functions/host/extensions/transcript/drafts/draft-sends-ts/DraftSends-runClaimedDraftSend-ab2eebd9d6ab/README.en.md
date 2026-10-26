# `DraftSends.runClaimedDraftSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737068-737076](../../../../../../../../reference/runtime/host-main.cjs#L737068-L737076) | `method` | yes | `session, entryId, run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737068-737076](../../../../../../../../reference/runtime/host-main.cjs#L737068-L737076) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:737068

Calls written directly in this body: `run`, `this.inFlightSends.add`, `this.inFlightSends.delete`.

SHA-256 of the source span: `ef64ecda1da75a93dbc954534fc77886e9802a84904b10205622ef8c13008692`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
