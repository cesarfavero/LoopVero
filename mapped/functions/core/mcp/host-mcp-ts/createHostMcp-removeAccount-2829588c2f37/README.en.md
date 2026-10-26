# `createHostMcp/removeAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701074-701078](../../../../../../reference/runtime/host-main.cjs#L701074-L701078) | `FunctionExpression` | yes | `request5` |
| [host:701301-701303](../../../../../../reference/runtime/host-main.cjs#L701301-L701303) | `FunctionExpression` | yes | `{ serverId, accountKey }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701074-701078](../../../../../../reference/runtime/host-main.cjs#L701074-L701078) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:701301-701303](../../../../../../reference/runtime/host-main.cjs#L701301-L701303) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701074

Calls written directly in this body: `manager.removeAccount`, `serversMutated`.

SHA-256 of the source span: `9cf415e131416eb2b821cfb65691cf417929797cfe56674d579dc2ade4d37035`.

### host:701301

Calls written directly in this body: `mutations.removeAccount`, `toInstalledServers`.

SHA-256 of the source span: `505b93899f71ba9a928bbde236f94cf568150a2d49fe7a89432791dbcd5ae579`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
