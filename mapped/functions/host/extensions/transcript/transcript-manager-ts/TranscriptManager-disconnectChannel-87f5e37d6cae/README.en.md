# `TranscriptManager.disconnectChannel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783315-783317](../../../../../../../reference/runtime/host-main.cjs#L783315-L783317) | `method` | no | `agentId, platform2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783315-783317](../../../../../../../reference/runtime/host-main.cjs#L783315-L783317) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783315

Calls written directly in this body: `this.sessionStore.disconnectChannel`.

SHA-256 of the source span: `14348503943a470d8fa8bfc52650a4ac4ad33d9c4f38a665f0bd8b529a82d5e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
