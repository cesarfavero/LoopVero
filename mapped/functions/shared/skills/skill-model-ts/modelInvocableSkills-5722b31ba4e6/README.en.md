# `modelInvocableSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534089-534091](../../../../../../reference/runtime/sand-eval-runner.cjs#L534089-L534091) | `FunctionDeclaration` | no | `skills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534089-534091](../../../../../../reference/runtime/sand-eval-runner.cjs#L534089-L534091) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534089

Calls written directly in this body: `.filter`, `limitSurfacedSkills`.

SHA-256 of the source span: `ab2450f230d551dcb696736987e618abf3e24cdca9745a972310649657b10571`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
