# `SandManagedSkillsService.runRefreshes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/managed-setup/managed-skills-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-skills-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684016-684040](../../../../../../../reference/runtime/host-main.cjs#L684016-L684040) | `method` | yes | `trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684016-684040](../../../../../../../reference/runtime/host-main.cjs#L684016-L684040) | 2 | 2 | 1 | 1 | 0 | 1 |

### host:684016

Calls written directly in this body: `errorLogTag`, `fetchedManagedSkillToSandSkill`, `skills.push`, `this.options.fetch`, `this.options.getCacheDir`, `this.options.report`, `writeManagedSkillsCache`.

Assignment or increment targets: `nextTrigger`, `this.pendingTrigger`.

SHA-256 of the source span: `3c3cfc016fa68d53f87d83ccfd0f7d4bfc6932ed30017f53bfecdc49c9433e80`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
