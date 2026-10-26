# `GlobalSkillLibrary.write`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684722-684725](../../../../../../reference/runtime/host-main.cjs#L684722-L684725) | `method` | no | `id, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684722-684725](../../../../../../reference/runtime/host-main.cjs#L684722-L684725) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:684722

Calls written directly in this body: `serializeSkillFile`, `this.dir.writeFileAtomic`, `this.existingFrontmatter`, `this.get`, `this.path`.

SHA-256 of the source span: `44e52f965c3e6b9e905dd45a9074e3332dd9c228d57fb61817325fd08dcb9e6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
