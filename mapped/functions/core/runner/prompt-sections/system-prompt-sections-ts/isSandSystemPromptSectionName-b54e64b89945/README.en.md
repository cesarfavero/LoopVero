# `isSandSystemPromptSectionName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/system-prompt-sections.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/system-prompt-sections-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537281-537283](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537281-L537283) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537281-537283](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537281-L537283) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537281

Calls written directly in this body: `SAND_SYSTEM_PROMPT_SECTIONS.some`.

SHA-256 of the source span: `ef18f3d27ed36aefd74c5ffe6b2485c22147c880b429acb7d648b5db33a82709`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
