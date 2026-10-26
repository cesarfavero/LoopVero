# `SandMcpListingSummaries.createBoxServerSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-summaries.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688943-688979](../../../../../../../reference/runtime/host-main.cjs#L688943-L688979) | `method` | não | `server, box, boxDiscoveryUnavailable` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688943-688979](../../../../../../../reference/runtime/host-main.cjs#L688943-L688979) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:688943

Chamadas escritas diretamente neste corpo: `displayCommand`, `displayTransport`, `pluginAttributionFromDisplayServer`, `statusFromBoxListStatus`, `this.countEnabledTools`, `this.deps.isBoxExecWired`, `this.resolveServerCustomInstruction`, `unnamedMcpRowIdentifier`.

Alvos de atribuição ou incremento: `enabledToolCount`.

SHA-256 do trecho: `7ddd9c5a1b7be97a7e2ddc84e93e911093adfc875dc74b1ad23f101d3709005b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
