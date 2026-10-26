# `isFrozenPromptSectionAbsenceUnresolved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/frozen-prompt-section.ts` · [Module README](../../../../../modules/core/runner/frozen-prompt-section-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530548-530550](../../../../../../reference/runtime/sand-eval-runner.cjs#L530548-L530550) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530548-530550](../../../../../../reference/runtime/sand-eval-runner.cjs#L530548-L530550) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:530548

Calls written directly in this body: `SAND_FROZEN_PROMPT_SECTIONS_ABSENT_IS_UNRESOLVED.some`.

SHA-256 of the source span: `9aab3c2e256f8e8c6171fb262cc84498ea18907bbc25973fd74679ebadc7d216`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
