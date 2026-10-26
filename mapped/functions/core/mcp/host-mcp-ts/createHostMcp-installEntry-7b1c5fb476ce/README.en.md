# `createHostMcp/installEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701016-701025](../../../../../../reference/runtime/host-main.cjs#L701016-L701025) | `FunctionExpression` | yes | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701016-701025](../../../../../../reference/runtime/host-main.cjs#L701016-L701025) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:701016

Calls written directly in this body: `dropLiveSkillReferences`, `manager.installEntry`, `pluginSkillSourceUrls`, `serversMutated`, `syncPluginSkillsInBackground`.

SHA-256 of the source span: `8e3e305212b9205993434b9baf78ff5d422731656ae3fee7cc6b43b09b11d1ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
