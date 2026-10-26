# `renderSandPromptSections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533097-533105](../../../../../../reference/runtime/sand-eval-runner.cjs#L533097-L533105) | `FunctionDeclaration` | no | `sections, prefixSections = []` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533097-533105](../../../../../../reference/runtime/sand-eval-runner.cjs#L533097-L533105) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533097

Calls written directly in this body: `lines2.join`, `renderedSections.forEach`.

SHA-256 of the source span: `51bae40f868ed8513d05e449655651297c8e9b31c1f91b3e3018b8073382d531`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
