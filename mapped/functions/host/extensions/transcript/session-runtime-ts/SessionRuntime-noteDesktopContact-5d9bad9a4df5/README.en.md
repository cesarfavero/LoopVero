# `SessionRuntime.noteDesktopContact`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737997-738000](../../../../../../../reference/runtime/host-main.cjs#L737997-L738000) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737997-738000](../../../../../../../reference/runtime/host-main.cjs#L737997-L738000) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:737997

Calls written directly in this body: `Date.now`, `this.windowFocusedAtMsBySurface.has`, `this.windowFocusedAtMsBySurface.set`.

SHA-256 of the source span: `dea71119093d7b1aae05bfeead9cb80b3cb2c576aabbb7f85d68654ec6190fb3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
