# `backfillUserPluginInstalls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690550-690575](../../../../../../../reference/runtime/host-main.cjs#L690550-L690575) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690550-690575](../../../../../../../reference/runtime/host-main.cjs#L690550-L690575) | 4 | 2 | 2 | 1 | 0 | 1 |

### host:690550

Chamadas escritas diretamente neste corpo: `BigInt`, `Promise.all`, `accountMcpBackendClient`, `backfilled.push`, `client.getAvailableMcpServers`, `client.installUserPlugin`, `effective.map`, `fetchEffectiveUserPlugins`, `knownPluginIds.has`, `logAccountMcpFetchError`, `missingPluginIds.add`, `new GetAvailableMcpServersRequest`, `new InstallUserPluginRequest`, `new Set`, `server.pluginId.toString`.

SHA-256 do trecho: `3dd17b4b25288883aefee22fce0256caf617dea75b5a0e9928f53ea645bcb67d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
