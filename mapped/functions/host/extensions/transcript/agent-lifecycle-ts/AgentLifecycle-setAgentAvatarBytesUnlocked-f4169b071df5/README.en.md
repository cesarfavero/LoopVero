# `AgentLifecycle.setAgentAvatarBytesUnlocked`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733857-733879](../../../../../../../reference/runtime/host-main.cjs#L733857-L733879) | `method` | yes | `agentId, pngBytes, source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733857-733879](../../../../../../../reference/runtime/host-main.cjs#L733857-L733879) | 4 | 0 | 3 | 1 | 0 | 0 |

### host:733857

Calls written directly in this body: `avatarVersionForBytes`, `this.tm.roster.emitAgentUpdate`, `this.tm.roster.emitProfileChanged`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.noteHostWrittenAvatarVersion`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.setAgentAvatarBytes`, `this.tm.sessionStore.setAgentAvatarBytesById`.

Assignment or increment targets: `summary`.

SHA-256 of the source span: `ba27957409416e32a2f2c94f7a2597b0c7d942f3ad9d25b59ff3ecf5ce918188`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
