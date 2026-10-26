# `DraftSends.sweepStrandedDraftSends`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737216-737249](../../../../../../../../reference/runtime/host-main.cjs#L737216-L737249) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737216-737249](../../../../../../../../reference/runtime/host-main.cjs#L737216-L737249) | 2 | 2 | 2 | 1 | 0 | 2 |

### host:737216

Calls written directly in this body: `classifyAgentError`, `this.isLiveTranscriptFor`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.listAgentIds`, `this.tm.sessionStore.settleStrandedDraftSends`, `this.tm.telemetry.reportAgentError`, `updateEntry`.

Assignment or increment targets: `agentIds`, `settled`.

SHA-256 of the source span: `dc865b460e0940eb06d4fecdf6dfcd873f3d34fa845d37eb6213b3d479c4cafb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
