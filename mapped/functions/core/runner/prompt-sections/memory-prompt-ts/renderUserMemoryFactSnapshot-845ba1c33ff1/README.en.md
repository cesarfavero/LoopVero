# `renderUserMemoryFactSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538041-538076](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538041-L538076) | `FunctionDeclaration` | no | `recall2, ctx, shownFacts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538041-538076](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538041-L538076) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538041

Calls written directly in this body: `appendBudgetedProvenancedFacts`, `lines2.join`, `lines2.push`.

SHA-256 of the source span: `3d33e71ea694a691084ba2412049aa26123cd5c2a0b3735134fb32d262c3417c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
