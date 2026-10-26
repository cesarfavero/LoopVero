# `fetchAccountMcpServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690392-690501](../../../../../../../reference/runtime/host-main.cjs#L690392-L690501) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690392-690501](../../../../../../../reference/runtime/host-main.cjs#L690392-L690501) | 16 | 3 | 3 | 2 | 0 | 1 |

### host:690392

Chamadas escritas diretamente neste corpo: `Object.entries`, `Promise.all`, `String`, `accountMcpAccessToken`, `accountScopeOfToken`, `client.getAvailableMcpServers`, `displayServerFields`, `displayServerFromAvailableServer`, `displayServerId`, `fetchStdioRuntimeConfig`, `grokNativeDisplayServer`, `httpConfigFromAvailableServer`, `isLeftoverListingId`, `new GetAvailableMcpServersRequest`, `new GetMcpConfigRequest`, `new Map`, `new Set`, `parseAccountMcpConfigJson`, `response.servers.flatMap`, `response.servers.some`, `server.type.toLowerCase`, `serverIdsByNameFromMetadata`, `servers.push`, `stdioConfigById.get`, `stdioConfigById.set`, `stdioConfigFromAvailableServer`, `teamStdioTeamIds.map`, `tokenScopedBackendClient`, `unavailableAccountMcpServers`, `unresolvedServerIds.push`.

Alvos de atribuição ou incremento: `cacheScope`, `config2`, `config3`.

SHA-256 do trecho: `0060e93f698e6b408214ac28b12b02d04dfd85c341649b8bf00cd848fdfac8dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
