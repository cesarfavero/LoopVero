# `AgentLifecycle.mintAgentSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733504-733514](../../../../../../../reference/runtime/host-main.cjs#L733504-L733514) | `method` | yes | `profile, origin, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733504-733514](../../../../../../../reference/runtime/host-main.cjs#L733504-L733514) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:733504

Calls written directly in this body: `options2.configureAgentDir`, `this.tm.sessionStore.createSession`, `this.tm.sessionStore.getAgentDir`.

SHA-256 of the source span: `3cc560f041162aeb628347ab52dcd8dd472f02c4006a41c304c09e26e2d90620`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
