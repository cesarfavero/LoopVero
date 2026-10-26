# `clampLine2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/receipt.ts` · [Module README](../../../../../modules/shared/voice-call/receipt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714487-714493](../../../../../../reference/runtime/host-main.cjs#L714487-L714493) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714487-714493](../../../../../../reference/runtime/host-main.cjs#L714487-L714493) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:714487

Calls written directly in this body: `.trimEnd`, `Math.floor`, `slice.lastIndexOf`, `slice.slice`, `text3.slice`.

SHA-256 of the source span: `843fba5028273c2849b1a2ca36cc795381c4a21c8817534df19083fd5713ed1d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
