# `teamBotLinksSkillPointer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/builtin-skill-pointers.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/builtin-skill-pointers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528957-528963](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528957-L528963) | `FunctionDeclaration` | no | `skillAccess = "read"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528957-528963](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528957-L528963) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528957

Calls written directly in this body: `builtinSkillPointer`.

SHA-256 of the source span: `e77a79533ba74b0f6e84fc716bf2dfaf9ad855d2fce8c7bcab4bd67c8d02a4c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
