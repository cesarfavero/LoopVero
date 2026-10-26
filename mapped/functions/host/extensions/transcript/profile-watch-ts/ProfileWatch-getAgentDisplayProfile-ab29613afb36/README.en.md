# `ProfileWatch.getAgentDisplayProfile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/profile-watch.ts` · [Module README](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738878-738886](../../../../../../../reference/runtime/host-main.cjs#L738878-L738886) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738878-738886](../../../../../../../reference/runtime/host-main.cjs#L738878-L738886) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:738878

Calls written directly in this body: `getSandProfilePath`, `profile.name.trim`, `readSandProfileFile`, `this.tm.sessionStore.getAgentDir`.

SHA-256 of the source span: `aad539d9e21814f0a0a8f03c3c72d6b09bcb29aa6d5e308733c78d3c451bc0c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
