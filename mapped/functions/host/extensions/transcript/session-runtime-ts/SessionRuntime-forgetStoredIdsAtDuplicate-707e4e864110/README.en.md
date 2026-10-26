# `SessionRuntime.forgetStoredIdsAtDuplicate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737974-737976](../../../../../../../reference/runtime/host-main.cjs#L737974-L737976) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737974-737976](../../../../../../../reference/runtime/host-main.cjs#L737974-L737976) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737974

Calls written directly in this body: `this.storedIdsByAgentAtDuplicate.delete`.

SHA-256 of the source span: `37238b239a072557d6083c32b1a76090f2e5ee6726ee96c0e64df77889294e04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
