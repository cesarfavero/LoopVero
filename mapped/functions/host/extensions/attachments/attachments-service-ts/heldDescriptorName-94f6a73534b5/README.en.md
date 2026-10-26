# `heldDescriptorName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498757-498761](../../../../../../../reference/runtime/host-main.cjs#L498757-L498761) | `FunctionDeclaration` | yes | `readHeldName, ioPath, realPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498757-498761](../../../../../../../reference/runtime/host-main.cjs#L498757-L498761) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:498757

Calls written directly in this body: `readHeldName`.

SHA-256 of the source span: `defe35f5092d77938238ec73770f8473abad8ac6d3a647c1a8c52273b397ea6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
