# `readCappedImageBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/http-image.ts` · [Module README](../../../../../modules/shared/node/http-image-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404445-404464](../../../../../../reference/runtime/host-main.cjs#L404445-L404464) | `FunctionDeclaration` | yes | `response, maxBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404445-404464](../../../../../../reference/runtime/host-main.cjs#L404445-L404464) | 5 | 1 | 2 | 4 | 0 | 0 |

### host:404445

Calls written directly in this body: `Buffer.concat`, `Number`, `Number.isFinite`, `body.getReader`, `chunks.push`, `reader.cancel`, `reader.read`, `response.headers.get`.

Assignment or increment targets: `total`.

SHA-256 of the source span: `0c4b49c72dac0c33ede00c2997687d5d7a648768a6d82cd9e47a4010aad09217`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
