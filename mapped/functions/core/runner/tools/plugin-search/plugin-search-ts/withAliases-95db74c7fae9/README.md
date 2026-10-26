# `withAliases`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/plugin-search/plugin-search.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779490-779492](../../../../../../../../reference/runtime/host-main.cjs#L779490-L779492) | `FunctionDeclaration` | não | `terms` |
| [evaluation:579728-579730](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579728-L579730) | `FunctionDeclaration` | não | `terms` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779490-779492](../../../../../../../../reference/runtime/host-main.cjs#L779490-L779492) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579728-579730](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579728-L579730) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779490

Chamadas escritas diretamente neste corpo: `new Set`, `terms.flatMap`.

SHA-256 do trecho: `deb31bbb10987db4cd9fdd7b58e85e92dddec438b51a0f06f25ec52afd651c78`.

### evaluation:579728

Chamadas escritas diretamente neste corpo: `new Set`, `terms.flatMap`.

SHA-256 do trecho: `deb31bbb10987db4cd9fdd7b58e85e92dddec438b51a0f06f25ec52afd651c78`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
