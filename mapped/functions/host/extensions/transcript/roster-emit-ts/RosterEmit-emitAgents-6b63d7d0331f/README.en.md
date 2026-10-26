# `RosterEmit.emitAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-emit.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738967-738970](../../../../../../../reference/runtime/host-main.cjs#L738967-L738970) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738967-738970](../../../../../../../reference/runtime/host-main.cjs#L738967-L738970) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738967

Calls written directly in this body: `this.scheduleCoalescedEmit`.

Assignment or increment targets: `this.pendingFullEmit`.

SHA-256 of the source span: `0d9fc40631603c0e2aca52ccce6340dbe65a901bda6e3f1d877cdbd38f2309b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
