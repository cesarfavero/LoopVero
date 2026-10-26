# `GlobalSkillLibrary.renameLegacyRecipeFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684580-684599](../../../../../../reference/runtime/host-main.cjs#L684580-L684599) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684580-684599](../../../../../../reference/runtime/host-main.cjs#L684580-L684599) | 1 | 1 | 0 | 0 | 0 | 3 |

### host:684580

Calls written directly in this body: `.isFile`, `this.folder`, `this.listIds`, `this.path`.

SHA-256 of the source span: `b4988058091883c91817a3cf8f73917f7bccaa120d24c9fd58f313f36b2fb2d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
