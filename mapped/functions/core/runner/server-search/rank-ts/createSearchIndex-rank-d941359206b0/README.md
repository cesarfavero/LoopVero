# `createSearchIndex/rank`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/server-search/rank.ts` · [README do módulo](../../../../../../modules/core/runner/server-search/rank-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765907-765918](../../../../../../../reference/runtime/host-main.cjs#L765907-L765918) | `ArrowFunctionExpression` | sim | `query2, options2` |
| [evaluation:559271-559282](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559271-L559282) | `ArrowFunctionExpression` | sim | `query2, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765907-765918](../../../../../../../reference/runtime/host-main.cjs#L765907-L765918) | 2 | 1 | 1 | 2 | 0 | 0 |
| [evaluation:559271-559282](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559271-L559282) | 2 | 1 | 1 | 2 | 0 | 0 |

### host:765907

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `entries.entries`, `matches.push`, `matches.sort`, `new Set`, `queryWords`, `scoreEachWordByCoverage`, `sliceYielder`, `yieldIfDue`.

SHA-256 do trecho: `07ebf7037423e9cd5a66184d0035ce5b2dc4a8b47b871e6f8bc4a1ae0f2ba88f`.

### evaluation:559271

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `entries.entries`, `matches.push`, `matches.sort`, `new Set`, `queryWords`, `scoreEachWordByCoverage`, `sliceYielder`, `yieldIfDue`.

SHA-256 do trecho: `6edc5c11e8a1eb158bf21b52064e59554e6abafcd150ff0f5c01c1a4faa764dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
