# `SandMcpManager.listServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689353-689400](../../../../../../../reference/runtime/host-main.cjs#L689353-L689400) | `method` | sim | `options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689353-689400](../../../../../../../reference/runtime/host-main.cjs#L689353-L689400) | 6 | 1 | 4 | 2 | 0 | 1 |

### host:689353

Chamadas escritas diretamente neste corpo: `boxByName.set`, `boxRuntime.isBoxExecWired`, `httpDisplayServers`, `httpServers.map`, `new Map`, `reportBoxStdioErrorStatus`, `reportMcpHostEdgeFailure`, `state.servers.filter`, `stdioDisplayServers`, `this.accountSlots.noteListedState`, `this.connectorAuth.read`, `this.listBackendForStatus`, `this.listingCache.listBox`, `this.readVisibleDisplayServers`, `this.summarizeServers`.

Alvos de atribuição ou incremento: `boxDiscoveryUnavailable`.

SHA-256 do trecho: `bd8390194ef6bb15f6bb00aa519fd0130f1863b4e38524f7e8ee8d2295693fc8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
