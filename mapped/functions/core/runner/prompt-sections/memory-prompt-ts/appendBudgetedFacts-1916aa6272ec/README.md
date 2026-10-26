# `appendBudgetedFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537811-537823](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537811-L537823) | `FunctionDeclaration` | não | `lines2, records2, renderFact, charBudget, shownFacts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537811-537823](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537811-L537823) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:537811

Chamadas escritas diretamente neste corpo: `lines2.push`, `renderFact`, `shownFacts.push`.

Alvos de atribuição ou incremento: `budget`, `shown`.

SHA-256 do trecho: `620583f68e8c55a7ce7eea7457ef248f3ac671b92fb2246ae84bc270be214863`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
