# `renderUserMemorySystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538077-538085](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538077-L538085) | `FunctionDeclaration` | no | `recall2, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538077-538085](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538077-L538085) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538077

Calls written directly in this body: `.join`, `policy.replace`, `renderUserMemoryFactSnapshot`, `renderUserMemorySystemPolicyPrompt`.

SHA-256 of the source span: `036320c8b9d6d90938b2192e81ba340618707181d85ce2aa6e676552796e9ac0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
