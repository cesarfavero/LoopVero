# `WidgetResponses.reactToMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783135-783145](../../../../../../../reference/runtime/host-main.cjs#L783135-L783145) | `method` | yes | `entryId, emoji3, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783135-783145](../../../../../../../reference/runtime/host-main.cjs#L783135-L783145) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:783135

Calls written directly in this body: `emoji3.trim`, `this.applyReaction`, `this.tm.sessions.ensureActionTarget`.

SHA-256 of the source span: `d38be99caa747d180bd613314e34bdda4aa8510cf58e4dac7327e31635955c7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
