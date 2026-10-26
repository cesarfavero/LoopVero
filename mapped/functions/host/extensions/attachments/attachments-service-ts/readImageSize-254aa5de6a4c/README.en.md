# `readImageSize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498888-498895](../../../../../../../reference/runtime/host-main.cjs#L498888-L498895) | `FunctionDeclaration` | yes | `buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498888-498895](../../../../../../../reference/runtime/host-main.cjs#L498888-L498895) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:498888

Calls written directly in this body: `readDisplayedImageDimensions`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `d2babe39734514ee68ffe78ec41dfe2d3ff7119dcff0fa38c3e8e47d5610f4f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
