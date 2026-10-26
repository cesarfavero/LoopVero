# `SessionRuntime.markActiveSessionArrival`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737928-737941](../../../../../../../reference/runtime/host-main.cjs#L737928-L737941) | `method` | no | `session, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737928-737941](../../../../../../../reference/runtime/host-main.cjs#L737928-L737941) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:737928

Calls written directly in this body: `Date.now`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.markSessionActivity`, `this.tm.sessionStore.markSessionViewedNow`.

SHA-256 of the source span: `8a84d8b85b74368353c56a500fa3c95f9baee560cb318be6169fe3a8eac3796e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
