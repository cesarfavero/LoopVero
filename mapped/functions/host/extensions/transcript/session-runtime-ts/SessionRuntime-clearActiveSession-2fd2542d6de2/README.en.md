# `SessionRuntime.clearActiveSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738265-738269](../../../../../../../reference/runtime/host-main.cjs#L738265-L738269) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738265-738269](../../../../../../../reference/runtime/host-main.cjs#L738265-L738269) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:738265

Calls written directly in this body: `this.tm.roster.invalidateActiveOutline`, `this.tm.sessionStore.writeActiveAgentId`.

Assignment or increment targets: `this.activeSession`.

SHA-256 of the source span: `31522cb52084d1a4fa8f401fc677177c630b2a8b68b965a1800a2cf11691ae52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
