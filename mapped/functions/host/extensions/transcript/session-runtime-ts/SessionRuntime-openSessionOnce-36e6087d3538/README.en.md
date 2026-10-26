# `SessionRuntime.openSessionOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738214-738225](../../../../../../../reference/runtime/host-main.cjs#L738214-L738225) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738214-738225](../../../../../../../reference/runtime/host-main.cjs#L738214-L738225) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:738214

Calls written directly in this body: `.catch`, `this.pendingSessionOpens.get`, `this.pendingSessionOpens.set`, `this.tm.sessionStore.openSession`.

SHA-256 of the source span: `1784234edc04260963d53fdffd90b76e4d4595de73899491317d0771c18afc4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
