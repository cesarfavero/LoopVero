# `scorePluginForTerm`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/plugin-search/plugin-search.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779505-779509](../../../../../../../../reference/runtime/host-main.cjs#L779505-L779509) | `FunctionDeclaration` | não | `plugin, term` |
| [evaluation:579743-579747](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579743-L579747) | `FunctionDeclaration` | não | `plugin, term` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779505-779509](../../../../../../../../reference/runtime/host-main.cjs#L779505-L779509) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579743-579747](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579743-L579747) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:779505

Chamadas escritas diretamente neste corpo: `isSearchableToken`, `plugin.displayName.toLowerCase`, `plugin.name.toLowerCase`, `scorePluginForToken`.

SHA-256 do trecho: `82ce03a0ade8c6436ee7875b609341d54a5b23628873b89a5f3d3c73c8966ad0`.

### evaluation:579743

Chamadas escritas diretamente neste corpo: `isSearchableToken`, `plugin.displayName.toLowerCase`, `plugin.name.toLowerCase`, `scorePluginForToken`.

SHA-256 do trecho: `82ce03a0ade8c6436ee7875b609341d54a5b23628873b89a5f3d3c73c8966ad0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
