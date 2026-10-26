# `cloudAgentInboundEntryId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734404-734409](../../../../../../../reference/runtime/host-main.cjs#L734404-L734409) | `FunctionDeclaration` | no | `entries, bcId, report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734404-734409](../../../../../../../reference/runtime/host-main.cjs#L734404-L734409) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:734404

Calls written directly in this body: `.digest`, `.slice`, `.update`, `cloudAgentExchangeRound`.

SHA-256 of the source span: `3fc9414ee03393bb272c2ab3b178433fff24eb87c362b8db8768b8c0212d2cb1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
