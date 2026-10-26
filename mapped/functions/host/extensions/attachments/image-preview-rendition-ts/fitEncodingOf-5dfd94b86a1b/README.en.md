# `fitEncodingOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-preview-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-preview-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498334-498336](../../../../../../../reference/runtime/host-main.cjs#L498334-L498336) | `FunctionDeclaration` | no | `sourcePath2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498334-498336](../../../../../../../reference/runtime/host-main.cjs#L498334-L498336) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:498334

Calls written directly in this body: `LOSSY_FIT_EXTENSIONS.has`, `extensionOf`.

SHA-256 of the source span: `5f0e6dd5f6caba318a654a368f908bb04fd2cc39a6ba8173a34503568918ba61`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
