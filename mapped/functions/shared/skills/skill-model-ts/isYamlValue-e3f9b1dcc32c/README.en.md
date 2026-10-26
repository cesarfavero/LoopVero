# `isYamlValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682998-683003](../../../../../../reference/runtime/host-main.cjs#L682998-L683003) | `FunctionDeclaration` | no | `value` |
| [evaluation:534110-534115](../../../../../../reference/runtime/sand-eval-runner.cjs#L534110-L534115) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682998-683003](../../../../../../reference/runtime/host-main.cjs#L682998-L683003) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:534110-534115](../../../../../../reference/runtime/sand-eval-runner.cjs#L534110-L534115) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:682998

Calls written directly in this body: `Array.isArray`, `isSkillFrontmatter`, `value.every`.

SHA-256 of the source span: `5c242ff842da7ff3225dc522640f7d94e03e978f2e274cb2ead8e49c1246acbe`.

### evaluation:534110

Calls written directly in this body: `Array.isArray`, `isSkillFrontmatter`, `value.every`.

SHA-256 of the source span: `5c242ff842da7ff3225dc522640f7d94e03e978f2e274cb2ead8e49c1246acbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
