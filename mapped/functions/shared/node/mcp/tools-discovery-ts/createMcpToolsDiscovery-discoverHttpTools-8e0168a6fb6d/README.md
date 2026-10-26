# `createMcpToolsDiscovery/_discoverHttpTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691355-691385](../../../../../../../reference/runtime/host-main.cjs#L691355-L691385) | `FunctionDeclaration` | sim | `serverIdentifiers, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691355-691385](../../../../../../../reference/runtime/host-main.cjs#L691355-L691385) | 6 | 1 | 1 | 3 | 0 | 0 |

### host:691355

Chamadas escritas diretamente neste corpo: `_displayRowForIdentifier`, `_noDiscoveredServers`, `core2.backendMcpExec.listTools`, `deps.onBackendListing`, `errorMessages.set`, `new Map`, `reportMcpHostEdgeDegraded`, `slotFor`, `statusForBackendSlot`, `statuses.set`, `tools.push`, `withMcpTurnStartDiscoveryWait`.

SHA-256 do trecho: `39111d50a94876d2ad1d382b829f4ff7a76a5e1061de572bb3efb8cad77e0e0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
