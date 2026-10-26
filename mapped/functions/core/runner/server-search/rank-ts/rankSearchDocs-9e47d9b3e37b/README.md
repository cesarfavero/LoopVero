# `rankSearchDocs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/server-search/rank.ts` · [README do módulo](../../../../../../modules/core/runner/server-search/rank-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765921-765926](../../../../../../../reference/runtime/host-main.cjs#L765921-L765926) | `FunctionDeclaration` | sim | `items, query2, options2` |
| [evaluation:559285-559290](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559285-L559290) | `FunctionDeclaration` | sim | `items, query2, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765921-765926](../../../../../../../reference/runtime/host-main.cjs#L765921-L765926) | 1 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:559285-559290](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559285-L559290) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:765921

Chamadas escritas diretamente neste corpo: `.rank`, `createSearchIndex`, `new Set`, `queryWords`.

SHA-256 do trecho: `4b536d0e272ba0688eec50520071930e45ba0cd7c3073080ce2003b64376f104`.

### evaluation:559285

Chamadas escritas diretamente neste corpo: `.rank`, `createSearchIndex`, `new Set`, `queryWords`.

SHA-256 do trecho: `4b536d0e272ba0688eec50520071930e45ba0cd7c3073080ce2003b64376f104`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
