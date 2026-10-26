# `createHostMcp/pluginSkillSourceUrls`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700983-700994](../../../../../../reference/runtime/host-main.cjs#L700983-L700994) | `ArrowFunctionExpression` | yes | `pluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700983-700994](../../../../../../reference/runtime/host-main.cjs#L700983-L700994) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:700983

Calls written directly in this body: `.flatMap`, `manager.getCatalog`, `reportMcpHostEdgeFailure`, `views.find`.

SHA-256 of the source span: `06ecead0c16476e67c13034445ba6d8f39f663758f09e3c22104e736f19b2fb4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
