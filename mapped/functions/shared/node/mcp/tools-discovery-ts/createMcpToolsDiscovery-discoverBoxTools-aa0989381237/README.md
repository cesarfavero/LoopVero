# `createMcpToolsDiscovery/_discoverBoxTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691386-691423](../../../../../../../reference/runtime/host-main.cjs#L691386-L691423) | `FunctionDeclaration` | sim | `stdioServerNames` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691386-691423](../../../../../../../reference/runtime/host-main.cjs#L691386-L691423) | 4 | 1 | 3 | 4 | 0 | 1 |

### host:691386

Chamadas escritas diretamente neste corpo: `_ensureBoxServersPushed`, `_noDiscoveredServers`, `new Map`, `reportBoxStdioErrorStatus`, `reportMcpHostEdgeFailure`, `statusFromBoxListStatus`, `statuses.set`, `tools.push`, `withMcpTurnStartDiscoveryWait`.

SHA-256 do trecho: `97c6f006cf42d3b20e0704cfe3f85807092aa8ac93c20d9e6a29d7a63df78ce8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
