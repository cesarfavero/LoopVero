# `imageRecipe/plan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-preview-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498403-498426](../../../../../../../reference/runtime/host-main.cjs#L498403-L498426) | `FunctionExpression` | yes | `{ path: path33, ioPath }, step` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498403-498426](../../../../../../../reference/runtime/host-main.cjs#L498403-L498426) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:498403

Calls written directly in this body: `PREVIEW_SOURCE_EXTENSIONS.has`, `extensionOf`, `sizeOf`, `step.attempt`.

SHA-256 of the source span: `c49aef42fba7bcaa8451fe36998d6172aac890477c5ed2108a75df41961bfee9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
