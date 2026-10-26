# `claimedAttachmentFolder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498702-498717](../../../../../../../reference/runtime/host-main.cjs#L498702-L498717) | `FunctionDeclaration` | no | `resolved` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498702-498717](../../../../../../../reference/runtime/host-main.cjs#L498702-L498717) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:498702

Calls written directly in this body: `.split`, `folder.split`, `getSandRootDir`, `isPathWithin`, `resolveAttachmentOwnerDir`.

SHA-256 of the source span: `50e7f64057cc69d951c1f4cee0275508f0686486a6d13cc8395961be54e54523`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
