# `backfillUserPluginInstalls`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690550-690575](../../../../../../../reference/runtime/host-main.cjs#L690550-L690575) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690550-690575](../../../../../../../reference/runtime/host-main.cjs#L690550-L690575) | 4 | 2 | 2 | 1 | 0 | 1 |

### host:690550

Calls written directly in this body: `BigInt`, `Promise.all`, `accountMcpBackendClient`, `backfilled.push`, `client.getAvailableMcpServers`, `client.installUserPlugin`, `effective.map`, `fetchEffectiveUserPlugins`, `knownPluginIds.has`, `logAccountMcpFetchError`, `missingPluginIds.add`, `new GetAvailableMcpServersRequest`, `new InstallUserPluginRequest`, `new Set`, `server.pluginId.toString`.

SHA-256 of the source span: `3dd17b4b25288883aefee22fce0256caf617dea75b5a0e9928f53ea645bcb67d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
