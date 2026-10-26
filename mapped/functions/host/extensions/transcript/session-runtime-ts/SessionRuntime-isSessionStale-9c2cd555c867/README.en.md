# `SessionRuntime.isSessionStale`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738069-738071](../../../../../../../reference/runtime/host-main.cjs#L738069-L738071) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738069-738071](../../../../../../../reference/runtime/host-main.cjs#L738069-L738071) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738069

Calls written directly in this body: `this.tm.runLifecycle.isSessionRetiring`.

SHA-256 of the source span: `0de33dc9635df5e4541c431128a6172bd8e7a1dd16f8d27b58f8b9c9a911c8be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
