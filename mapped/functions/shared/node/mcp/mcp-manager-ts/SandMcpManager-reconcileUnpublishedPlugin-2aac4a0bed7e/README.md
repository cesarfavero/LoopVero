# `SandMcpManager.reconcileUnpublishedPlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689849-689853](../../../../../../../reference/runtime/host-main.cjs#L689849-L689853) | `method` | sim | `rawPluginId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689849-689853](../../../../../../../reference/runtime/host-main.cjs#L689849-L689853) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689849

Chamadas escritas diretamente neste corpo: `this.catalogFlow.reconcileUnpublishedPlugin`, `validateMarketplacePluginId`.

SHA-256 do trecho: `5a766380f6d8fb8ff27d9a045f60c88e19eaa6c36040df1481ed914ec4b53ace`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
