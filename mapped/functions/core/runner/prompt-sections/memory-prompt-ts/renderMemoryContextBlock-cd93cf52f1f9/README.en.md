# `renderMemoryContextBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538088-538097](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538088-L538097) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538088-538097](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538088-L538097) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538088

Calls written directly in this body: `.join`, `.replaceAll`, `facts.replaceAll`.

SHA-256 of the source span: `f289e9addcc913c37abadf0e46dcb895cc5a8e660ac0290780aa1065a8526f3d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
