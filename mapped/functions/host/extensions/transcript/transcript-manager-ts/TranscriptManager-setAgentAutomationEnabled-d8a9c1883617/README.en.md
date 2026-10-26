# `TranscriptManager.setAgentAutomationEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783592-783594](../../../../../../../reference/runtime/host-main.cjs#L783592-L783594) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783592-783594](../../../../../../../reference/runtime/host-main.cjs#L783592-L783594) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783592

Calls written directly in this body: `this.automationRuntime.setAgentAutomationEnabled`.

SHA-256 of the source span: `c9871c0ea66c3ab315b61b851ab66420f1e7e484c1a7c6576e65928d713553ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
