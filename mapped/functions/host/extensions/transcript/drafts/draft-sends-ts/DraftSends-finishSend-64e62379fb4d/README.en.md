# `DraftSends.finishSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737077-737194](../../../../../../../../reference/runtime/host-main.cjs#L737077-L737194) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737077-737194](../../../../../../../../reference/runtime/host-main.cjs#L737077-L737194) | 20 | 0 | 2 | 7 | 0 | 0 |

### host:737077

Calls written directly in this body: `completion.run`, `this.appendConnectCard`, `this.executeCall`, `this.rollbackSendingDraft`, `this.settleSentDraft`, `this.settleUnconfirmedDraft`, `this.tm.hostLog`, `this.tm.telemetry.reportToolCallError`, `this.tm.trayErrors.pushError`.

Assignment or increment targets: `errorClass`, `settledState`.

SHA-256 of the source span: `7a59f218e8484ced76f770ce2959ff774617e1a2f16a4624f98b7b918f99d067`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
