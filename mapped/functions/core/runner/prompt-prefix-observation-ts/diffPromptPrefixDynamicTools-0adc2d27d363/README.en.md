# `diffPromptPrefixDynamicTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546294-546302](../../../../../../reference/runtime/sand-eval-runner.cjs#L546294-L546302) | `FunctionDeclaration` | no | `previous, current2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546294-546302](../../../../../../reference/runtime/sand-eval-runner.cjs#L546294-L546302) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:546294

Calls written directly in this body: `.map`, `current2.dynamicTools.filter`, `new Set`, `previous.dynamicTools.filter`.

SHA-256 of the source span: `abab59a39be937ff1968d1b5f550a70a21960b5b75b061dd5d88bf945b1aa799`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
