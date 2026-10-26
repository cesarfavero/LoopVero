# `clampSkillBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682992-682994](../../../../../../reference/runtime/host-main.cjs#L682992-L682994) | `FunctionDeclaration` | no | `body` |
| [evaluation:534104-534106](../../../../../../reference/runtime/sand-eval-runner.cjs#L534104-L534106) | `FunctionDeclaration` | no | `body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682992-682994](../../../../../../reference/runtime/host-main.cjs#L682992-L682994) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534104-534106](../../../../../../reference/runtime/sand-eval-runner.cjs#L534104-L534106) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682992

Calls written directly in this body: `clampBlock`.

SHA-256 of the source span: `1c9b2c4344d1171e58439c20d161b0108f98e27eb39dc816ba4e7fcd898147ca`.

### evaluation:534104

Calls written directly in this body: `clampBlock`.

SHA-256 of the source span: `1c9b2c4344d1171e58439c20d161b0108f98e27eb39dc816ba4e7fcd898147ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
