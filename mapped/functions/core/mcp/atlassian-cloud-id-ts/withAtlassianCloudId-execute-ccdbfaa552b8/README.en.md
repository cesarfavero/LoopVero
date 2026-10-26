# `withAtlassianCloudId/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/atlassian-cloud-id.ts` · [Module README](../../../../../modules/core/mcp/atlassian-cloud-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579058-579096](../../../../../../reference/runtime/sand-eval-runner.cjs#L579058-L579096) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579058-579096](../../../../../../reference/runtime/sand-eval-runner.cjs#L579058-L579096) | 8 | 0 | 3 | 8 | 0 | 0 |

### evaluation:579058

Calls written directly in this body: `.includes`, `Value.fromJson`, `args.clone`, `atlassianCloudIdFill.applied`, `atlassianCloudIdFill.refused`, `ctx.get`, `executor.execute`, `lacksCloudId`, `logShimFiring`, `lookupFailedRefusal`, `refuse2`, `refusedResult`, `severalSitesRefusal`, `sites.result.clone`, `sitesOf`.

Assignment or increment targets: `filled.args[computed]`.

SHA-256 of the source span: `5f8e9e9ab2ffc999bec2993cb8954f80144b2059486ffb0fc69fff72b447a596`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
