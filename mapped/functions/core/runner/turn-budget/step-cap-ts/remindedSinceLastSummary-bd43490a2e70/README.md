# `remindedSinceLastSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/budgets-recovery/README.md).

**Módulo:** `core/runner/turn-budget/step-cap.ts` · [README do módulo](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587297-587306](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587297-L587306) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587297-587306](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587297-L587306) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:587297

Chamadas escritas diretamente neste corpo: `.startsWith`, `isSummaryMessage`, `textOf4`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `1db64b10159a3bbabd9a1e8247d77bec3af9a2fb20106f2aff30f3be4f74ba04`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
