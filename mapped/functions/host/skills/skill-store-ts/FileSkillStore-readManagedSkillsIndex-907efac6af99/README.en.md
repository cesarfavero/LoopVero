# `FileSkillStore.readManagedSkillsIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720978-720983](../../../../../../reference/runtime/host-main.cjs#L720978-L720983) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720978-720983](../../../../../../reference/runtime/host-main.cjs#L720978-L720983) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720978

Calls written directly in this body: `getManagedSkillsCachePath`, `managedSkillsIndexCache.read`.

SHA-256 of the source span: `ea3f81cbd31d8516d63e48ce9f3624b9fb48de28bdfe9283190fbdfe786a3838`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
