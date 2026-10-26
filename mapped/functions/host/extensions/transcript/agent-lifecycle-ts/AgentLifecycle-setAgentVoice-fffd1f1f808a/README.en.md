# `AgentLifecycle.setAgentVoice`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733825-733838](../../../../../../../reference/runtime/host-main.cjs#L733825-L733838) | `method` | yes | `{     agentId,     voiceId,     voiceSpeed,     voiceLanguage   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733825-733838](../../../../../../../reference/runtime/host-main.cjs#L733825-L733838) | 3 | 0 | 1 | 0 | 0 | 0 |

### host:733825

Calls written directly in this body: `normalizeSandVoiceId`, `normalizeSandVoiceLanguage`, `normalizeSandVoiceSpeed`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.setSessionVoice`.

SHA-256 of the source span: `241604245c0a9b8f6400991eeedab33ab112d5698c7e74319f36db78f390bc06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
