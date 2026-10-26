# `FileSkillStore.create`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721067-721084](../../../../../../reference/runtime/host-main.cjs#L721067-L721084) | `method` | no | `spec, provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721067-721084](../../../../../../reference/runtime/host-main.cjs#L721067-L721084) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:721067

Calls written directly in this body: `clampSkillBody`, `clampSkillName`, `this.createAutomation`, `this.library.create`, `this.skillFromRecord`.

SHA-256 of the source span: `b448ed54cf5cefc9bc019863c5ef9f544c39cee39cbd4761728def5edfb9a7f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
