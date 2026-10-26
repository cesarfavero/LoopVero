# `FileSkillStore.managedSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720990-720994](../../../../../../reference/runtime/host-main.cjs#L720990-L720994) | `method` | no | `excludedIds = /* @__PURE__ */ new Set()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720990-720994](../../../../../../reference/runtime/host-main.cjs#L720990-L720994) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:720990

Calls written directly in this body: `.map`, `cache3.skills.filter`, `this.readManagedSkillsIndex`.

SHA-256 of the source span: `7be7177ceb1107f91ffbdacd760fda9917c0a072fb6f68271a48059c887c048b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
