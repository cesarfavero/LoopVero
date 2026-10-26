# `createHostMcp/readAccountServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701344-701350](../../../../../../reference/runtime/host-main.cjs#L701344-L701350) | `ArrowFunctionExpression` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701344-701350](../../../../../../reference/runtime/host-main.cjs#L701344-L701350) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:701344

Chamadas escritas diretamente neste corpo: `.getUserServerConfigs`, `manager.definitionSourceView`, `manager.lastAccountDisplayConfigView`, `manager.reloadAccountServers`.

SHA-256 do trecho: `1184adf214bb753a6635c5e391d13f7336eae77c1659484afb9f578fbf77e727`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
