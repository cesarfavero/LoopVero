# `primaryStreamOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-display-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498160-498170](../../../../../../../reference/runtime/host-main.cjs#L498160-L498170) | `FunctionDeclaration` | no | `streams` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498160-498170](../../../../../../../reference/runtime/host-main.cjs#L498160-L498170) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:498160

Calls written directly in this body: `streams.find`.

Assignment or increment targets: `largest`.

SHA-256 of the source span: `08523c0690cffd654a77f7b63d00fcf0cb3b5a79494ddeeedc29b99d501aa789`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
