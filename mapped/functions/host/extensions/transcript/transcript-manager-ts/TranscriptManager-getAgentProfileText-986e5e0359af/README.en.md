# `TranscriptManager.getAgentProfileText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783302-783304](../../../../../../../reference/runtime/host-main.cjs#L783302-L783304) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783302-783304](../../../../../../../reference/runtime/host-main.cjs#L783302-L783304) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783302

Calls written directly in this body: `this.sessionStore.getAgentProfileText`.

SHA-256 of the source span: `7fe9bfa4ffb548a1517a782f5a5474a68c93665299cd2bfb474e8cce1e03f6b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
