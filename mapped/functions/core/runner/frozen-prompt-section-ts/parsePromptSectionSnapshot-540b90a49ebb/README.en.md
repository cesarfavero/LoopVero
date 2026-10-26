# `parsePromptSectionSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/frozen-prompt-section.ts` · [Module README](../../../../../modules/core/runner/frozen-prompt-section-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717041-717066](../../../../../../reference/runtime/host-main.cjs#L717041-L717066) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717041-717066](../../../../../../reference/runtime/host-main.cjs#L717041-L717066) | 8 | 0 | 0 | 4 | 0 | 0 |

### host:717041

Calls written directly in this body: `/^[0-9a-f]{64}$/u.test`, `isFiniteNumber2`, `isUnknownRecord2`, `parseAutomationStatusSnapshot`.

SHA-256 of the source span: `c60541825e4c9b7d72acccb9787380df52032470b0184e45845b74227e73c283`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
