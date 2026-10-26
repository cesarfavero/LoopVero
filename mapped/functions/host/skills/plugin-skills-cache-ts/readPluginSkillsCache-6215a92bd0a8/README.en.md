# `readPluginSkillsCache`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/plugin-skills-cache.ts` · [Module README](../../../../../modules/host/skills/plugin-skills-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684299-684319](../../../../../../reference/runtime/host-main.cjs#L684299-L684319) | `FunctionDeclaration` | no | `cacheDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684299-684319](../../../../../../reference/runtime/host-main.cjs#L684299-L684319) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:684299

Calls written directly in this body: `.map`, `Array.isArray`, `JSON.parse`, `Number.isFinite`, `getPluginSkillsCachePath`, `getPluginsRootDir`, `parsed2.authBlocked.every`, `parsed2.installFolders.filter`, `parsed2.skills.every`, `parsed2.skills.filter`, `positiveIdOrNull`, `readHostOwnedFileSync`, `reportFallbackUnlessAbsent`.

SHA-256 of the source span: `cc867b39be25546bce7df6a82a1d12f4fe0254b1ab5ef9eca873ce3afeb4563c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
