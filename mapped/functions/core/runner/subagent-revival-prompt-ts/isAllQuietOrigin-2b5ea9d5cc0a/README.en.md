# `isAllQuietOrigin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-revival-prompt.ts` · [Module README](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583892-583894](../../../../../../reference/runtime/sand-eval-runner.cjs#L583892-L583894) | `FunctionDeclaration` | no | `completions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583892-583894](../../../../../../reference/runtime/sand-eval-runner.cjs#L583892-L583894) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583892

Calls written directly in this body: `completions.every`.

SHA-256 of the source span: `9c59c66eb70ad47459ca91c7cf171c56a1456d520312879513c64f68cd11c64d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
