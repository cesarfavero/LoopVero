# `SessionRuntime.resolveLiveSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738072-738078](../../../../../../../reference/runtime/host-main.cjs#L738072-L738078) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738072-738078](../../../../../../../reference/runtime/host-main.cjs#L738072-L738078) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:738072

Calls written directly in this body: `this.isSessionStale`, `this.liveSessions.get`, `this.tm.runLifecycle.retireSession`.

SHA-256 of the source span: `3bd9eb97d9509731a27c3df2cc50cb42ef1ebd2abe2205cbd7d1193ade4bdac6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
