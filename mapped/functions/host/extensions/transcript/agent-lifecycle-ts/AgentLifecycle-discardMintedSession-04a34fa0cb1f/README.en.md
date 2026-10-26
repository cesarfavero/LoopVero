# `AgentLifecycle.discardMintedSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733601-733615](../../../../../../../reference/runtime/host-main.cjs#L733601-L733615) | `method` | yes | `session, newId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733601-733615](../../../../../../../reference/runtime/host-main.cjs#L733601-L733615) | 1 | 0 | 2 | 0 | 0 | 1 |

### host:733601

Calls written directly in this body: `.catch`, `session.agentStore.dispose`, `session.db.close`, `this.tm.sessionStore.deleteSession`.

SHA-256 of the source span: `9fd0614c2e16fff2089a3526dbba5b31fb26f83cbacb018b141ab3936a6b9ee8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
