# `appendBudgetedProvenancedFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537988-538003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537988-L538003) | `FunctionDeclaration` | não | `lines2, records2, charBudget, moreLabel, hint, shownFacts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537988-538003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537988-L538003) | 2 | 1 | 0 | 0 | 0 | 0 |

### evaluation:537988

Chamadas escritas diretamente neste corpo: `lines2.push`, `omittedFactsHint`, `provenancedFactLine`, `shownFacts.push`.

Alvos de atribuição ou incremento: `budget`, `shown`.

SHA-256 do trecho: `2c2bd749dea82383d8893351752def6e595b9082db797df75cb64cc98ff29794`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
