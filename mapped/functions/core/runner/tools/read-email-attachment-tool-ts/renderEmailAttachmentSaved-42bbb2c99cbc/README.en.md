# `renderEmailAttachmentSaved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-attachment-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-attachment-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764957-764962](../../../../../../../reference/runtime/host-main.cjs#L764957-L764962) | `FunctionDeclaration` | no | `attachment, path33` |
| [evaluation:558325-558330](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558325-L558330) | `FunctionDeclaration` | no | `attachment, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764957-764962](../../../../../../../reference/runtime/host-main.cjs#L764957-L764962) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558325-558330](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558325-L558330) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764957

Calls written directly in this body: `.join`, `describe3`.

SHA-256 of the source span: `5a47968445e3671819e7bf8b40ec85a1885dc6694ab2c5156080be132b0f98c3`.

### evaluation:558325

Calls written directly in this body: `.join`, `describe3`.

SHA-256 of the source span: `5a47968445e3671819e7bf8b40ec85a1885dc6694ab2c5156080be132b0f98c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
