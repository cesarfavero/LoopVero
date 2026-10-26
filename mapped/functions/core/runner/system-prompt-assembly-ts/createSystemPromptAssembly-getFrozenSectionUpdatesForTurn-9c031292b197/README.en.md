# `createSystemPromptAssembly/getFrozenSectionUpdatesForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553153-553164](../../../../../../reference/runtime/sand-eval-runner.cjs#L553153-L553164) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553153-553164](../../../../../../reference/runtime/sand-eval-runner.cjs#L553153-L553164) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553153

Calls written directly in this body: `.filter`, `.join`, `getSectionUpdatesForTurn`, `renderSandFrozenPromptInstructionsUpdate`, `renderSectionsForRowHost`.

SHA-256 of the source span: `c6859e62d6770e91d47d47360096cbff428b70abf7ad661e05de5af08f37d14a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
