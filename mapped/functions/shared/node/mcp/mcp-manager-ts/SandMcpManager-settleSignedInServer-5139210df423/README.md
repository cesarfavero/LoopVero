# `SandMcpManager.settleSignedInServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690200-690231](../../../../../../../reference/runtime/host-main.cjs#L690200-L690231) | `method` | não | `watch4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690200-690231](../../../../../../../reference/runtime/host-main.cjs#L690200-L690231) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:690200

Chamadas escritas diretamente neste corpo: `.then`, `Promise.all`, `findDisplayServerByAddress`, `httpDisplayServers`, `this.connectorAuth.read`, `this.displayListing.emitsUpdates`, `this.lastAccountDisplayConfigView`, `this.listingCache.listBackend`, `this.reloadDefinitions`, `this.signedInRowsAwaitingAccountRead.set`, `this.visibleServersOf`.

SHA-256 do trecho: `5b45fc357d75faefcc18beaf209c0850dad8bb8d34d21e5c6594494d7e863995`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
