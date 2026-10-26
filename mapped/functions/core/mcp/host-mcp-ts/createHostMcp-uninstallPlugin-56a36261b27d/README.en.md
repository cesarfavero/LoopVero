# `createHostMcp/uninstallPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701036-701045](../../../../../../reference/runtime/host-main.cjs#L701036-L701045) | `FunctionExpression` | yes | `pluginId` |
| [host:701245-701251](../../../../../../reference/runtime/host-main.cjs#L701245-L701251) | `FunctionExpression` | yes | `pluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701036-701045](../../../../../../reference/runtime/host-main.cjs#L701036-L701045) | 1 | 0 | 2 | 1 | 0 | 0 |
| [host:701245-701251](../../../../../../reference/runtime/host-main.cjs#L701245-L701251) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:701036

Calls written directly in this body: `dropLiveSkillReferences`, `manager.uninstallPlugin`, `pluginSkillSourceUrls`, `serversMutated`, `syncPluginSkillsInBackground`, `uninstallClearedInstallRecord`.

SHA-256 of the source span: `08aa953df9b9ac392265dff8f68389352e3cf0869e5440029f9727c0cf1da643`.

### host:701245

Calls written directly in this body: `mutations.uninstallPlugin`.

SHA-256 of the source span: `32b4ba0e12132edd89dbc18ae3c328896342cf433d847efbfa3e0431e29e2708`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
