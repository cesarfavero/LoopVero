# `renderUserBotNotesPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537824-537840](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537824-L537840) | `FunctionDeclaration` | não | `recall2, shownFacts, stateTools2 = ALL_STATE_TOOLS` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537824-537840](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537824-L537840) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:537824

Chamadas escritas diretamente neste corpo: `appendBudgetedFacts`, `lines2.join`, `lines2.push`, `omittedFactsHint`.

SHA-256 do trecho: `fcfb228a83a1f46a268df460826264a1daee8358bf3a59a2d62ec6eda0a321cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
