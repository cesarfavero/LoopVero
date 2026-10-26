# `videoStreamsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-display-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498126-498138](../../../../../../../reference/runtime/host-main.cjs#L498126-L498138) | `FunctionDeclaration` | no | `probe` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498126-498138](../../../../../../../reference/runtime/host-main.cjs#L498126-L498138) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:498126

Calls written directly in this body: `isDefaultDisposition`, `streams.push`.

SHA-256 of the source span: `700e8cbfe5180e40260f22cb5dce633f908968cd502573232e8a40e124401a79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
