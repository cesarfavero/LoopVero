# `pruneUninstalledPluginDataDirs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701898-701915](../../../../../../../reference/runtime/host-main.cjs#L701898-L701915) | `FunctionDeclaration` | no | `dataRoot, listedPluginIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701898-701915](../../../../../../../reference/runtime/host-main.cjs#L701898-L701915) | 1 | 1 | 0 | 1 | 0 | 2 |

### host:701898

Calls written directly in this body: `entry.isDirectory`, `keep.has`, `new Set`, `removeSandDataTreeSync`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `1d5db7309bbd7c8dbfed53e3c9bd12201d0cfb79cc62e45433cfe19baa065bbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
