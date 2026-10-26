# `SandMcpListingSummaries.createCredentialPresenceSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-summaries.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688922-688942](../../../../../../../reference/runtime/host-main.cjs#L688922-L688942) | `method` | não | `server, accountKey, slot, hasToken` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688922-688942](../../../../../../../reference/runtime/host-main.cjs#L688922-L688942) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:688922

Chamadas escritas diretamente neste corpo: `credentialPresenceStatus`, `displayCommand`, `displayTransport`, `displayUrl`, `pluginAttributionFromDisplayServer`, `provisionalMcpAccountServerIdentifier`, `this.resolveServerCustomInstruction`, `unnamedMcpRowIdentifier`.

SHA-256 do trecho: `fbdf6080fd301fe13e3f4928c3cf3900566f7d38227c7db5a46b459b07c11b90`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
