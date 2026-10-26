# `parseProbeJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-display-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498171-498177](../../../../../../../reference/runtime/host-main.cjs#L498171-L498177) | `FunctionDeclaration` | no | `json3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498171-498177](../../../../../../../reference/runtime/host-main.cjs#L498171-L498177) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:498171

Calls written directly in this body: `JSON.parse`, `new ImageProbeUnrecognizedError`, `probeSchema.safeParse`.

Explicit throw targets: `ImageProbeUnrecognizedError`.

SHA-256 of the source span: `008f643324a9b5e38149f34698a58524dee3136e231f7fb0b80b5079a65e8bdf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
