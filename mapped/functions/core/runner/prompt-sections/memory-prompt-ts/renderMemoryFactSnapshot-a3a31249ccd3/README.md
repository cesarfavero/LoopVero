# `renderMemoryFactSnapshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537844-537893](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537844-L537893) | `FunctionDeclaration` | não | `recall2, location, opts, shownFacts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537844-537893](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537844-L537893) | 9 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537844

Chamadas escritas diretamente neste corpo: `appendBudgetedFacts`, `lines2.join`, `lines2.push`, `omittedFactsHint`.

SHA-256 do trecho: `3473e6b64d30e9a339bcb122afc3a6fd9ef4d57480ba50bda1ae070ec5d553c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
