# `imageContentType`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/http-image.ts` · [Module README](../../../../../modules/shared/node/http-image-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404441-404444](../../../../../../reference/runtime/host-main.cjs#L404441-L404444) | `FunctionDeclaration` | no | `response` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404441-404444](../../../../../../reference/runtime/host-main.cjs#L404441-L404444) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:404441

Calls written directly in this body: `.split`, `[computed].trim`, `contentType.startsWith`, `response.headers.get`.

SHA-256 of the source span: `41eb8e6fb383f4b0cf055db559936827267f5f0431a485d99d01e1d76a81ed3a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
