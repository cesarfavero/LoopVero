# `pruneUninstalledPluginDirs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701863-701894](../../../../../../../reference/runtime/host-main.cjs#L701863-L701894) | `FunctionDeclaration` | no | `cacheRoot, listedCacheKeys, indexedFilePaths` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701863-701894](../../../../../../../reference/runtime/host-main.cjs#L701863-L701894) | 4 | 2 | 0 | 1 | 0 | 3 |

### host:701863

Calls written directly in this body: `indexedFilePaths.some`, `keep.has`, `listedCacheKeys.map`, `new Set`, `pluginEntry.isDirectory`, `removeSandDataTreeSync`, `slugEntry.isDirectory`.

Assignment or increment targets: `pluginEntries`, `slugEntries`.

SHA-256 of the source span: `a86ef4a5dea5768e0983544ad9cacd00443768e0e22ec64f396dc551e255a2ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
