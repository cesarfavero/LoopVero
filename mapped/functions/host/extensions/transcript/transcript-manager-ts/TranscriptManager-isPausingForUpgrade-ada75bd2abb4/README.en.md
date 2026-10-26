# `TranscriptManager.isPausingForUpgrade`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783517-783519](../../../../../../../reference/runtime/host-main.cjs#L783517-L783519) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783517-783519](../../../../../../../reference/runtime/host-main.cjs#L783517-L783519) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783517

Calls written directly in this body: `this.upgradeResume.isPausingForUpgrade`.

SHA-256 of the source span: `09ba913f08b09cf70de45f7b62296082a034bdd6919bc478312ad34ed4d5d477`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
