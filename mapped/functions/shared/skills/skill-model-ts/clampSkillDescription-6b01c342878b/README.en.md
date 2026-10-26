# `clampSkillDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682989-682991](../../../../../../reference/runtime/host-main.cjs#L682989-L682991) | `FunctionDeclaration` | no | `description9` |
| [evaluation:534101-534103](../../../../../../reference/runtime/sand-eval-runner.cjs#L534101-L534103) | `FunctionDeclaration` | no | `description9` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682989-682991](../../../../../../reference/runtime/host-main.cjs#L682989-L682991) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534101-534103](../../../../../../reference/runtime/sand-eval-runner.cjs#L534101-L534103) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682989

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `15d1f25cf1b50c9de60a6bb1dde0c69aff8b6b711dfc007cf6912778ff146a08`.

### evaluation:534101

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `15d1f25cf1b50c9de60a6bb1dde0c69aff8b6b711dfc007cf6912778ff146a08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
