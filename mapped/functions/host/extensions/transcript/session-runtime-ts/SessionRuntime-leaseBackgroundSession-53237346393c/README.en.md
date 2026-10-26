# `SessionRuntime.leaseBackgroundSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738196-738206](../../../../../../../reference/runtime/host-main.cjs#L738196-L738206) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738196-738206](../../../../../../../reference/runtime/host-main.cjs#L738196-L738206) | 2 | 1 | 3 | 1 | 2 | 0 |

### host:738196

Calls written directly in this body: `new AgentGoneError`, `this.forgetSettledOpen`, `this.isAgentGone`, `this.isSessionStale`, `this.openSessionOnce`, `this.pinSessionActivation`, `this.resolveLiveSession`.

Assignment or increment targets: `session`.

Explicit throw targets: `AgentGoneError`.

SHA-256 of the source span: `22dad136d87c86aefb637d1864c5fae8d8c94e7e368da0d26688b71a42090071`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
