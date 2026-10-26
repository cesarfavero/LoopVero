# `SessionRuntime.scheduleWindowedActivation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738138-738168](../../../../../../../reference/runtime/host-main.cjs#L738138-L738168) | `method` | no | `agentId, shippedThroughId, openedAt, outgoingRowShipped` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738138-738168](../../../../../../../reference/runtime/host-main.cjs#L738138-L738168) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:738138

Calls written directly in this body: `.catch`, `new AbortController`, `this.invalidateDeferredActivation`, `this.windowedActivationTail.then`.

Assignment or increment targets: `this.pendingActivationAgentId`, `this.windowedActivationAbort`, `this.windowedActivationTail`.

SHA-256 of the source span: `ada271023e773b4e1509de6417836476c1dd7ce47dae4333734f5dbb0184b399`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
