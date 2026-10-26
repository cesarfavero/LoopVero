# `createSearchIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/server-search/rank.ts` · [README do módulo](../../../../../../modules/core/runner/server-search/rank-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765900-765920](../../../../../../../reference/runtime/host-main.cjs#L765900-L765920) | `FunctionDeclaration` | sim | `items, toDoc` |
| [evaluation:559264-559284](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559264-L559284) | `FunctionDeclaration` | sim | `items, toDoc` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765900-765920](../../../../../../../reference/runtime/host-main.cjs#L765900-L765920) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:559264-559284](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559264-L559284) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:765900

Chamadas escritas diretamente neste corpo: `CommandScoreComputer.createInSlices`, `entries.map`, `items.map`, `sliceYielder`.

SHA-256 do trecho: `eebc1a3d9d260af37d31e2402fe11e972f145e3afc9ab59e5d9790c1625e87ab`.

### evaluation:559264

Chamadas escritas diretamente neste corpo: `CommandScoreComputer.createInSlices`, `entries.map`, `items.map`, `sliceYielder`.

SHA-256 do trecho: `b8232d71a364d4e282bda326f0925b57c3ca40c85127926f20d24003014374e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
