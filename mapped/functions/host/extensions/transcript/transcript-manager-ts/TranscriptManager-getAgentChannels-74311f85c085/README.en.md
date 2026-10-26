# `TranscriptManager.getAgentChannels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783293-783295](../../../../../../../reference/runtime/host-main.cjs#L783293-L783295) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783293-783295](../../../../../../../reference/runtime/host-main.cjs#L783293-L783295) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783293

Calls written directly in this body: `this.sessionStore.listAgentChannels`.

SHA-256 of the source span: `a483a467ce8f0097c79f8412451086c38a86fcf4cc554763509771bc22d2afb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
