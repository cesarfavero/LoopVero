# `buildCloudAgentCustomModeMessageFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-custom-mode.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-custom-mode-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509931-509947](../../../../../../reference/runtime/host-main.cjs#L509931-L509947) | `FunctionDeclaration` | no | `slashName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509931-509947](../../../../../../reference/runtime/host-main.cjs#L509931-L509947) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509931

Calls written directly in this body: `encodeUnhydratedCustomModeSourcePath`, `getCustomModeId`, `name18.toLowerCase`, `new CustomModeIntent`, `new SubmittedCustomMode`, `slashName.trim`.

SHA-256 of the source span: `2b8d4194094b0418d5a9da6f1e04ce1c8b77d82ef0b7fc5d216dfad714bd64e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
