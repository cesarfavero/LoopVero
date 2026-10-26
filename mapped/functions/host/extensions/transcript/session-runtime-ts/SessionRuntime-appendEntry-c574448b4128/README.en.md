# `SessionRuntime.appendEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737907-737927](../../../../../../../reference/runtime/host-main.cjs#L737907-L737927) | `method` | no | `rawEntry, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737907-737927](../../../../../../../reference/runtime/host-main.cjs#L737907-L737927) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:737907

Calls written directly in this body: `appendEntry`, `entryRaisesUnreadSignal`, `entryRaisesUserActivitySignal`, `session.db.appendTranscriptEntry`, `this.markActiveSessionArrival`, `this.recordStoredIdsAtDuplicate`, `this.tm.hostLog`, `this.tm.roster.emit`, `withTimestampMs`.

SHA-256 of the source span: `651658e7f55e548d301b677bc0b906045120f57f38d68c4cd97550670864251c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
