# `FrozenPromptToolsMiddleware.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/frozen-prompt-tools.ts` · [Module README](../../../../../modules/core/frozen-prompts/frozen-prompt-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586259-586263](../../../../../../reference/runtime/sand-eval-runner.cjs#L586259-L586263) | `method` | no | `innerExecutor, frozenPromptId, binding` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586259-586263](../../../../../../reference/runtime/sand-eval-runner.cjs#L586259-L586263) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:586259

Calls written directly in this body: `super`.

Assignment or increment targets: `this.binding`, `this.frozenPromptId`.

SHA-256 of the source span: `e089a44989507aa931ba9a974995d743caa8c6a7c1886d3fbd594efc8525f2a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
