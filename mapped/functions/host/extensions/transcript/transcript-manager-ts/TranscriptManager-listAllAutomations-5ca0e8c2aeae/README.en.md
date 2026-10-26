# `TranscriptManager.listAllAutomations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783586-783588](../../../../../../../reference/runtime/host-main.cjs#L783586-L783588) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783586-783588](../../../../../../../reference/runtime/host-main.cjs#L783586-L783588) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783586

Calls written directly in this body: `this.automationRuntime.listAllAutomations`.

SHA-256 of the source span: `81fbb77c6ffb549961a243545629ef21babc497e516fe972d7fc5c97605f5f6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
