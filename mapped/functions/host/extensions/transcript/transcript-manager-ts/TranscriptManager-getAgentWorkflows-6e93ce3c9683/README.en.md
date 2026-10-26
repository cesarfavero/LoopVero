# `TranscriptManager.getAgentWorkflows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783607-783609](../../../../../../../reference/runtime/host-main.cjs#L783607-L783609) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783607-783609](../../../../../../../reference/runtime/host-main.cjs#L783607-L783609) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783607

Calls written directly in this body: `this.skillCommands.getAgentWorkflows`.

SHA-256 of the source span: `21ce608a165ac9b5bec47c39adaadfd15d948436eae7a2a352fc8b18c3165de8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
