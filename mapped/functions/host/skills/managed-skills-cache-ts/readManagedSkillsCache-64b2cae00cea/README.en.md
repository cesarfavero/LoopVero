# `readManagedSkillsCache`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/managed-skills-cache.ts` · [Module README](../../../../../modules/host/skills/managed-skills-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683291-683304](../../../../../../reference/runtime/host-main.cjs#L683291-L683304) | `FunctionDeclaration` | no | `cacheDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683291-683304](../../../../../../reference/runtime/host-main.cjs#L683291-L683304) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:683291

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `Number.isFinite`, `getManagedSkillsCachePath`, `parsed2.skills.every`, `readHostOwnedFileSync`, `reportFallbackUnlessAbsent`.

SHA-256 of the source span: `ecff5f0a198da617c08a45fac5e092c79aa8ee805945714a47bd6479d9119e54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
