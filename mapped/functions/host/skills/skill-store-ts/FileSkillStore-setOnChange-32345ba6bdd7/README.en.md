# `FileSkillStore.setOnChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720924-720929](../../../../../../reference/runtime/host-main.cjs#L720924-L720929) | `method` | no | `onChange` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720924-720929](../../../../../../reference/runtime/host-main.cjs#L720924-L720929) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720924

Calls written directly in this body: `this.automations.setOnChange`, `this.library.setOnChange`, `this.managedDirWatcher.setOnChange`, `this.pluginSkillsDirWatcher.setOnChange`.

SHA-256 of the source span: `16b3306b141089b285ab5189fcb50f1da17590ac4efd7e2d48dc797e8ec376c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
