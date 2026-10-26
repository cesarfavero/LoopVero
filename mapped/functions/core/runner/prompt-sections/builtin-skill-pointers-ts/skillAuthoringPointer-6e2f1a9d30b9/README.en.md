# `skillAuthoringPointer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/builtin-skill-pointers.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/builtin-skill-pointers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528950-528956](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528950-L528956) | `FunctionDeclaration` | no | `skillAccess = "read"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528950-528956](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528950-L528956) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528950

Calls written directly in this body: `builtinSkillPointer`.

SHA-256 of the source span: `6fcab09502260a412b94031cdc7a46056f2bfe12f0e3a818d0832343481d0baf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
