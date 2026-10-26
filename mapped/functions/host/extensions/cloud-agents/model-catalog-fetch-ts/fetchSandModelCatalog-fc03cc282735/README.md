# `fetchSandModelCatalog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/model-catalog-fetch.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/model-catalog-fetch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513615-513625](../../../../../../../reference/runtime/host-main.cjs#L513615-L513625) | `FunctionDeclaration` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513615-513625](../../../../../../../reference/runtime/host-main.cjs#L513615-L513625) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513615

Chamadas escritas diretamente neste corpo: `client.availableModels`, `createSandCursorBackendClient`, `mapAvailableModels`, `new AvailableModelsRequest`.

SHA-256 do trecho: `4050c07baf84b6d5056900a6e7910693d9f8856a37d6dd28367d82116c9ccf20`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
