# `storeAttachmentByteLimitForName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/attachment-limits.ts` · [Module README](../../../../../modules/shared/media/attachment-limits-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497067-497073](../../../../../../reference/runtime/host-main.cjs#L497067-L497073) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497067-497073](../../../../../../reference/runtime/host-main.cjs#L497067-L497073) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:497067

Calls written directly in this body: `extensionOf`, `nameLooksLikeVideo`.

SHA-256 of the source span: `3e0a4a9bde44ec4b249fedd6f729611ee862590052e9746297e02e3144e045cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
