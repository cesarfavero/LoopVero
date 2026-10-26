# `isFiniteNumber2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/frozen-prompt-section.ts` · [Module README](../../../../../modules/core/runner/frozen-prompt-section-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717038-717040](../../../../../../reference/runtime/host-main.cjs#L717038-L717040) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717038-717040](../../../../../../reference/runtime/host-main.cjs#L717038-L717040) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:717038

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `7995450426be211289ac0e9ad0897b8995773cc03a23564892f2273bd9a1172c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
