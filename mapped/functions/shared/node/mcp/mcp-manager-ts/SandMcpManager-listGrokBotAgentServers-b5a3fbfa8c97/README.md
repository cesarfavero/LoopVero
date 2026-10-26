# `SandMcpManager.listGrokBotAgentServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689636-689647](../../../../../../../reference/runtime/host-main.cjs#L689636-L689647) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689636-689647](../../../../../../../reference/runtime/host-main.cjs#L689636-L689647) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:689636

Chamadas escritas diretamente neste corpo: `isWithheldMcpDisplayServer`, `servers.push`, `this.loadGrokBotAgentServers`, `this.summaries.createCredentialPresenceSummaries`, `this.withheldSummaries`.

SHA-256 do trecho: `62fa5602a334b2a13237626e5c879352ef62211701bfbc65d0b436f23912f8f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
