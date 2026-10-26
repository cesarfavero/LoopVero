# `isPluginSkillRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/plugin-skills-cache.ts` · [Module README](../../../../../modules/host/skills/plugin-skills-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684274-684277](../../../../../../reference/runtime/host-main.cjs#L684274-L684277) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684274-684277](../../../../../../reference/runtime/host-main.cjs#L684274-L684277) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:684274

Calls written directly in this body: `isSafePluginSkillId`, `isUnknownRecord2`.

SHA-256 of the source span: `b47aacaa1dadfc7d477a958725291a329e97d791f18fc7f35a1fb1ce5afd71a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
