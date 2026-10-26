# `withAtlassianCloudId/sitesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/atlassian-cloud-id.ts` · [Module README](../../../../../modules/core/mcp/atlassian-cloud-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579050-579055](../../../../../../reference/runtime/sand-eval-runner.cjs#L579050-L579055) | `ArrowFunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579050-579055](../../../../../../reference/runtime/sand-eval-runner.cjs#L579050-L579055) | 2 | 0 | 3 | 2 | 0 | 0 |

### evaluation:579050

Calls written directly in this body: `lookUpOnce`, `lookupsByServer.get`.

SHA-256 of the source span: `038b832b1f94eabec30c22f6bb3f61679322b7cbc003e7bc39fdc1e3d78a7c16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
