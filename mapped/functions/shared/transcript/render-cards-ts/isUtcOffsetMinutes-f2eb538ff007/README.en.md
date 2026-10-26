# `isUtcOffsetMinutes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707843-707845](../../../../../../reference/runtime/host-main.cjs#L707843-L707845) | `FunctionDeclaration` | no | `value` |
| [evaluation:564330-564332](../../../../../../reference/runtime/sand-eval-runner.cjs#L564330-L564332) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707843-707845](../../../../../../reference/runtime/host-main.cjs#L707843-L707845) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564330-564332](../../../../../../reference/runtime/sand-eval-runner.cjs#L564330-L564332) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707843

Calls written directly in this body: `Math.abs`, `isInteger`.

SHA-256 of the source span: `4c3721be34690e58e536a8e742ee33a80cf451859a7863d97c89c509eed48027`.

### evaluation:564330

Calls written directly in this body: `Math.abs`, `isInteger`.

SHA-256 of the source span: `4c3721be34690e58e536a8e742ee33a80cf451859a7863d97c89c509eed48027`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
