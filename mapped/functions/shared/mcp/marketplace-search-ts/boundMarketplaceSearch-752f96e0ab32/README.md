# `boundMarketplaceSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/marketplace-search.ts` · [README do módulo](../../../../../modules/shared/mcp/marketplace-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779191-779206](../../../../../../reference/runtime/host-main.cjs#L779191-L779206) | `FunctionDeclaration` | não | `input2` |
| [evaluation:579363-579378](../../../../../../reference/runtime/sand-eval-runner.cjs#L579363-L579378) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779191-779206](../../../../../../reference/runtime/host-main.cjs#L779191-L779206) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579363-579378](../../../../../../reference/runtime/sand-eval-runner.cjs#L579363-L579378) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:779191

Chamadas escritas diretamente neste corpo: `.join`, `.slice`, `Array.from`, `input2.pluginIds.slice`, `input2.query.trim`, `nonEmptyId`.

SHA-256 do trecho: `2267fff1f510f1c508ca320bf89f69df2d85efe59610e7808afa01323a4bb682`.

### evaluation:579363

Chamadas escritas diretamente neste corpo: `.join`, `.slice`, `Array.from`, `input2.pluginIds.slice`, `input2.query.trim`, `nonEmptyId`.

SHA-256 do trecho: `687e92f87f0edad421509248df7ed8d505a3e97c69271c742630abc04ff8dc4f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
