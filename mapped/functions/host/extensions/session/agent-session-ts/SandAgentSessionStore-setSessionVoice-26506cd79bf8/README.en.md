# `SandAgentSessionStore.setSessionVoice`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723494-723500](../../../../../../../reference/runtime/host-main.cjs#L723494-L723500) | `method` | no | `{ agentId, voiceId, voiceSpeed, voiceLanguage }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723494-723500](../../../../../../../reference/runtime/host-main.cjs#L723494-L723500) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:723494

Calls written directly in this body: `getSandSettingsPath`, `this.getAgentDir`, `writeSandSettingsFile`.

SHA-256 of the source span: `e0d5bd21b6c6eb88763f3f81579689fc8718cbe546640c3b56ecbc5759482d9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
