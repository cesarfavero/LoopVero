# `isSandMessageInitiator`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/send/send.ts` · [Module README](../../../../../modules/shared/send/send-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487388-487390](../../../../../../reference/runtime/host-main.cjs#L487388-L487390) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487388-487390](../../../../../../reference/runtime/host-main.cjs#L487388-L487390) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487388

Calls written directly in this body: `SAND_MESSAGE_INITIATORS.some`.

SHA-256 of the source span: `0f14885a729f1bc04a9effd91696dff94c3c3d2f3d20a38591fe14eac7075645`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
