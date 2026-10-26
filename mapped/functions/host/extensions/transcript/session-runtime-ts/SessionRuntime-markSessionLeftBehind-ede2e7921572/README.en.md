# `SessionRuntime.markSessionLeftBehind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738079-738082](../../../../../../../reference/runtime/host-main.cjs#L738079-L738082) | `method` | no | `current2, at3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738079-738082](../../../../../../../reference/runtime/host-main.cjs#L738079-L738082) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:738079

Calls written directly in this body: `this.tm.sessionStore.markSessionViewedNow`.

SHA-256 of the source span: `50765b90f159286d3ac08f7b567fd336d62be49e153d2a75ec39435121564a6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
