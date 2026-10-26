# `responseToImageDataUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/http-image.ts` · [Module README](../../../../../modules/shared/node/http-image-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404465-404472](../../../../../../reference/runtime/host-main.cjs#L404465-L404472) | `FunctionDeclaration` | yes | `response, maxBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404465-404472](../../../../../../reference/runtime/host-main.cjs#L404465-L404472) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:404465

Calls written directly in this body: `bytes.toString`, `imageContentType`, `readCappedImageBytes`.

SHA-256 of the source span: `64f8787e84372182ee760854b2e3d4b4287278b8bd490414e03eb46019321c6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
