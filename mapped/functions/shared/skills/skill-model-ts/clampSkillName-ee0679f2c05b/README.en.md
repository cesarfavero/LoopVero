# `clampSkillName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682986-682988](../../../../../../reference/runtime/host-main.cjs#L682986-L682988) | `FunctionDeclaration` | no | `name18` |
| [evaluation:534098-534100](../../../../../../reference/runtime/sand-eval-runner.cjs#L534098-L534100) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682986-682988](../../../../../../reference/runtime/host-main.cjs#L682986-L682988) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534098-534100](../../../../../../reference/runtime/sand-eval-runner.cjs#L534098-L534100) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682986

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `389edcfc8af3c62d90bf81b46baa4b686a00154147385099be6be1b160c9b3cd`.

### evaluation:534098

Calls written directly in this body: `clampLine`.

SHA-256 of the source span: `389edcfc8af3c62d90bf81b46baa4b686a00154147385099be6be1b160c9b3cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
