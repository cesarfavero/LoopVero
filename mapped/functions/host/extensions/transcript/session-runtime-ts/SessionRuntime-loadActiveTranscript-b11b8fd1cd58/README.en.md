# `SessionRuntime.loadActiveTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737885-737903](../../../../../../../reference/runtime/host-main.cjs#L737885-L737903) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737885-737903](../../../../../../../reference/runtime/host-main.cjs#L737885-L737903) | 4 | 0 | 2 | 4 | 0 | 0 |

### host:737885

Calls written directly in this body: `getTranscript`, `this.restoreSession`, `this.setActiveTranscript`, `this.tm.roster.emit`, `this.tm.sessionStore.getTranscriptEntries`.

Assignment or increment targets: `this.loaded`.

SHA-256 of the source span: `d6ec89785deca07c2d3f340f822b7d9f3c5d2fa897f6fdf86161d8cd8d89de10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
