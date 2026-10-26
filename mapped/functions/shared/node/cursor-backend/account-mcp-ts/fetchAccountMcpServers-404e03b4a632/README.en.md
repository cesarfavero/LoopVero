# `fetchAccountMcpServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690392-690501](../../../../../../../reference/runtime/host-main.cjs#L690392-L690501) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690392-690501](../../../../../../../reference/runtime/host-main.cjs#L690392-L690501) | 16 | 3 | 3 | 2 | 0 | 1 |

### host:690392

Calls written directly in this body: `Object.entries`, `Promise.all`, `String`, `accountMcpAccessToken`, `accountScopeOfToken`, `client.getAvailableMcpServers`, `displayServerFields`, `displayServerFromAvailableServer`, `displayServerId`, `fetchStdioRuntimeConfig`, `grokNativeDisplayServer`, `httpConfigFromAvailableServer`, `isLeftoverListingId`, `new GetAvailableMcpServersRequest`, `new GetMcpConfigRequest`, `new Map`, `new Set`, `parseAccountMcpConfigJson`, `response.servers.flatMap`, `response.servers.some`, `server.type.toLowerCase`, `serverIdsByNameFromMetadata`, `servers.push`, `stdioConfigById.get`, `stdioConfigById.set`, `stdioConfigFromAvailableServer`, `teamStdioTeamIds.map`, `tokenScopedBackendClient`, `unavailableAccountMcpServers`, `unresolvedServerIds.push`.

Assignment or increment targets: `cacheScope`, `config2`, `config3`.

SHA-256 of the source span: `0060e93f698e6b408214ac28b12b02d04dfd85c341649b8bf00cd848fdfac8dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
