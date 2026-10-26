# `createHostMcp/renameAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701065-701073](../../../../../../reference/runtime/host-main.cjs#L701065-L701073) | `FunctionExpression` | yes | `request5` |
| [host:701296-701300](../../../../../../reference/runtime/host-main.cjs#L701296-L701300) | `FunctionExpression` | yes | `{ serverId, accountKey, newAccountKey }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701065-701073](../../../../../../reference/runtime/host-main.cjs#L701065-L701073) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:701296-701300](../../../../../../reference/runtime/host-main.cjs#L701296-L701300) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701065

Calls written directly in this body: `manager.renameAccount`, `serversMutated`.

SHA-256 of the source span: `86e2c6739f9c41ded43c9e325394990bff50be063b21aefd68db40d8ee55984a`.

### host:701296

Calls written directly in this body: `mutations.renameAccount`, `toInstalledServers`.

SHA-256 of the source span: `14497337ca9c317f409edb93f0a902b1b569a00bc073b7594ee395d714dde2ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
