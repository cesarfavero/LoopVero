# `isSkillFrontmatter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683004-683006](../../../../../../reference/runtime/host-main.cjs#L683004-L683006) | `FunctionDeclaration` | no | `value` |
| [evaluation:534116-534118](../../../../../../reference/runtime/sand-eval-runner.cjs#L534116-L534118) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683004-683006](../../../../../../reference/runtime/host-main.cjs#L683004-L683006) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534116-534118](../../../../../../reference/runtime/sand-eval-runner.cjs#L534116-L534118) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:683004

Calls written directly in this body: `.every`, `Object.values`, `isUnknownRecord2`.

SHA-256 of the source span: `2fe88414f924d2189484f254b4fd7de1c78558e0510d3d2807ef6b694b2b4806`.

### evaluation:534116

Calls written directly in this body: `.every`, `Object.values`, `isUnknownRecord2`.

SHA-256 of the source span: `2fe88414f924d2189484f254b4fd7de1c78558e0510d3d2807ef6b694b2b4806`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
