# `formatCloudAgentAttachmentTooLargeNotice`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-images.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567282-567284](../../../../../../reference/runtime/sand-eval-runner.cjs#L567282-L567284) | `FunctionDeclaration` | no | `url2, limitBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567282-567284](../../../../../../reference/runtime/sand-eval-runner.cjs#L567282-L567284) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:567282

Calls written directly in this body: `formatMegabytes`.

SHA-256 of the source span: `0db192eee8d64f9722a4ea9d8c5bd96a13374d4f714eaec151761c6d6a5981be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
