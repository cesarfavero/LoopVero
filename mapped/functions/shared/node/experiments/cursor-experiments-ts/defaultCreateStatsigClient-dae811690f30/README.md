# `defaultCreateStatsigClient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552584-552584](../../../../../../../reference/runtime/host-main.cjs#L552584-L552584) | `ArrowFunctionExpression` | não | `key, user, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552584-552584](../../../../../../../reference/runtime/host-main.cjs#L552584-L552584) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:552584 usa retorno implícito de arrow function.

### host:552584

Chamadas escritas diretamente neste corpo: `new import_js_client.StatsigClient`, `statsigClientPort`.

SHA-256 do trecho: `bcf6cb1743e68f08206c706616d8ea002342e63ce1196b5432b0e0e54a5d27a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
