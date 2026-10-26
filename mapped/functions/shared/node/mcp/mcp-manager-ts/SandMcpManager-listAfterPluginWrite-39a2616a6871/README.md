# `SandMcpManager.listAfterPluginWrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689989-690041](../../../../../../../reference/runtime/host-main.cjs#L689989-L690041) | `method` | sim | `write4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689989-690041](../../../../../../../reference/runtime/host-main.cjs#L689989-L690041) | 6 | 0 | 3 | 4 | 0 | 0 |

### host:689989

Chamadas escritas diretamente neste corpo: `.catch`, `boxRuntime.isBoxExecWired`, `httpDisplayServers`, `httpServers.map`, `initializing.some`, `new Set`, `state.servers.filter`, `summarize`, `this.connectorAuth.read`, `this.listBoxForDisplay`, `this.listingCache.generationGuard`, `this.listingCache.joinRecentBackend`, `this.readVisibleDisplayServers`, `this.statusListingDeadline.run`, `visible.servers.flatMap`.

SHA-256 do trecho: `a1cc57cea69f1d8d4af097baf78fe7a1890876eea00d2987f2fbe8ca52ae3a14`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
