# `flattenMarkup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/markdown-notification-text.ts` · [Module README](../../../../../modules/shared/media/markdown-notification-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722206-722217](../../../../../../reference/runtime/host-main.cjs#L722206-L722217) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722206-722217](../../../../../../reference/runtime/host-main.cjs#L722206-L722217) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:722206

Calls written directly in this body: `BLOCK_TRANSFORMS.reduce`, `EMPHASIS_TRANSFORMS.reduce`, `LINK_TRANSFORMS.reduce`, `flattened.replace`.

Assignment or increment targets: `flattened`, `pass`.

SHA-256 of the source span: `a3b42830125ee5064ff31f91110bcce92912e1f5b73b393193184b448845498a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
