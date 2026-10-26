# `SandManagedSkillsService.refresh`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/managed-setup/managed-skills-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-skills-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684003-684015](../../../../../../../reference/runtime/host-main.cjs#L684003-L684015) | `method` | yes | `trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684003-684015](../../../../../../../reference/runtime/host-main.cjs#L684003-L684015) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:684003

Calls written directly in this body: `this.runRefreshes`.

Assignment or increment targets: `this.pendingTrigger`, `this.refreshPromise`.

SHA-256 of the source span: `fd354db287b1866c74ec04fd91b3068ba4c01a9231490ebb6cd989401f6ed891`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
