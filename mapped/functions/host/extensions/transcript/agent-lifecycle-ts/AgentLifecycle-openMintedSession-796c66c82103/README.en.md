# `AgentLifecycle.openMintedSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733586-733600](../../../../../../../reference/runtime/host-main.cjs#L733586-L733600) | `method` | yes | `newId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733586-733600](../../../../../../../reference/runtime/host-main.cjs#L733586-L733600) | 1 | 0 | 4 | 1 | 2 | 1 |

### host:733586

Calls written directly in this body: `new SandAgentLifecycleError`, `this.discardMintedSession`, `this.tm.sessionStore.getTranscriptEntries`, `this.tm.sessionStore.openSession`, `this.tm.sessionStore.summarizeOpenSession`.

Assignment or increment targets: `session`.

Explicit throw targets: `SandAgentLifecycleError`, `error64`.

SHA-256 of the source span: `949987972eacb3d0e481051ae1eaa337b41b746b78c99d9480ee7495fecfb69b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
