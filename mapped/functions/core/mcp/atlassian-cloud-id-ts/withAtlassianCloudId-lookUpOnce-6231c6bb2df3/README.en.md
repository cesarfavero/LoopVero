# `withAtlassianCloudId/lookUpOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/atlassian-cloud-id.ts` · [Module README](../../../../../modules/core/mcp/atlassian-cloud-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579041-579049](../../../../../../reference/runtime/sand-eval-runner.cjs#L579041-L579049) | `ArrowFunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579041-579049](../../../../../../reference/runtime/sand-eval-runner.cjs#L579041-L579049) | 1 | 0 | 1 | 1 | 0 | 0 |

### evaluation:579041

Calls written directly in this body: `keptForTurn`, `lookUpSites`, `lookupsByServer.delete`, `lookupsByServer.get`, `lookupsByServer.set`.

SHA-256 of the source span: `488ce1e5a2a7046d8a91e8df78fbd1bb12511077e2b527c20268f2579fd357f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
