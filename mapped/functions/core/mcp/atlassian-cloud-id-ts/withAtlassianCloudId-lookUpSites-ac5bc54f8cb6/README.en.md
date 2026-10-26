# `withAtlassianCloudId/lookUpSites`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/atlassian-cloud-id.ts` · [Module README](../../../../../modules/core/mcp/atlassian-cloud-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579023-579040](../../../../../../reference/runtime/sand-eval-runner.cjs#L579023-L579040) | `ArrowFunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579023-579040](../../../../../../reference/runtime/sand-eval-runner.cjs#L579023-L579040) | 1 | 0 | 1 | 2 | 0 | 1 |

### evaluation:579023

Calls written directly in this body: `.with`, `ctx.with`, `errorLogTag`, `lookup3.siteExecutor.execute`, `lookupOf`, `new McpArgs`.

SHA-256 of the source span: `2e42bad3a92e7cf47b417088d434ea7a8eed1f84d491e0645177ac69d2724fa4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
