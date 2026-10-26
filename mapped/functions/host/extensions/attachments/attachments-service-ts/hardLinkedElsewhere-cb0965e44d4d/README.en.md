# `hardLinkedElsewhere`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498754-498756](../../../../../../../reference/runtime/host-main.cjs#L498754-L498756) | `FunctionDeclaration` | no | `realPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498754-498756](../../../../../../../reference/runtime/host-main.cjs#L498754-L498756) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:498754

Calls written directly in this body: `new AttachmentOutsideRootError`.

SHA-256 of the source span: `7e59b00f937ee93eae87badcc6a27998927dd3084f13842b6b3aa85ae4b52a43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
