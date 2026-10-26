# `createSystemPromptAssembly/getFrozenSectionUpdatesForTurn/commit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553159-553162](../../../../../../reference/runtime/sand-eval-runner.cjs#L553159-L553162) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553159-553162](../../../../../../reference/runtime/sand-eval-runner.cjs#L553159-L553162) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:553159

Calls written directly in this body: `sectionUpdates.commit`.

Assignment or increment targets: `frozenPromptUpdateAnnounced`.

SHA-256 of the source span: `d6494ff9537821dee501e87c816b28ee7c38d728900d94f6740da847549f1235`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
