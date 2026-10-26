# `GlobalSkillLibrary.create`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684681-684694](../../../../../../reference/runtime/host-main.cjs#L684681-L684694) | `method` | no | `spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684681-684694](../../../../../../reference/runtime/host-main.cjs#L684681-L684694) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:684681

Calls written directly in this body: `clampSkillBody`, `clampSkillDescription`, `clampSkillName`, `this.count`, `this.uniqueId`, `this.write`.

SHA-256 of the source span: `c93062a95997e762580d69f2319320c59d14f8a94b8ad2924ddca3f1de94038b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
