# `SessionRuntime.setActiveSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738270-738296](../../../../../../../reference/runtime/host-main.cjs#L738270-L738296) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738270-738296](../../../../../../../reference/runtime/host-main.cjs#L738270-L738296) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:738270

Calls written directly in this body: `this.liveSessions.set`, `this.tm.automationRuntime.enqueueAutomationLifecycleMutation`, `this.tm.roster.invalidateActiveOutline`, `this.tm.sessionStore.writeActiveAgentId`.

Assignment or increment targets: `this.activeSession`.

SHA-256 of the source span: `47b45d88831bc172fb8a1265cd99e95ac82c63d9fa4625764429df2c130eddf9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
