# `scoreEachWordByCoverage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/server-search/rank.ts` · [README do módulo](../../../../../../modules/core/runner/server-search/rank-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765888-765899](../../../../../../../reference/runtime/host-main.cjs#L765888-L765899) | `FunctionDeclaration` | não | `scorer, id, words2` |
| [evaluation:559252-559263](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559252-L559263) | `FunctionDeclaration` | não | `scorer, id, words` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765888-765899](../../../../../../../reference/runtime/host-main.cjs#L765888-L765899) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:559252-559263](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559252-L559263) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:765888

Chamadas escritas diretamente neste corpo: `scorer.score`.

Alvos de atribuição ou incremento: `matched`, `total`.

SHA-256 do trecho: `7abfb1cf7c09e4c9b2d3edd56045f8f2a64b8637162d57c1e7e979966850dd0a`.

### evaluation:559252

Chamadas escritas diretamente neste corpo: `scorer.score`.

Alvos de atribuição ou incremento: `matched`, `total`.

SHA-256 do trecho: `903050d5a80977d36a249505f41c11c1fce81e9913bbcb68d1262bd4e847e5ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
