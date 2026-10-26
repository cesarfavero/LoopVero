# `summarize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/sand-subagent-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780817-780817](../../../../../../reference/runtime/host-main.cjs#L780817-L780817) | `ArrowFunctionExpression` | não | `target` |
| [evaluation:581165-581165](../../../../../../reference/runtime/sand-eval-runner.cjs#L581165-L581165) | `ArrowFunctionExpression` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780817-780817](../../../../../../reference/runtime/host-main.cjs#L780817-L780817) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:780817 usa retorno implícito de arrow function.
| [evaluation:581165-581165](../../../../../../reference/runtime/sand-eval-runner.cjs#L581165-L581165) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581165 usa retorno implícito de arrow function.

### host:780817

Chamadas escritas diretamente neste corpo: `summarizeSandSubagentAction`.

SHA-256 do trecho: `2aa1157347877d58f6c435636097bcf04762ab2952d4ad77d8d2be72fdfde22b`.

### evaluation:581165

Chamadas escritas diretamente neste corpo: `summarizeSandSubagentAction`.

SHA-256 do trecho: `2aa1157347877d58f6c435636097bcf04762ab2952d4ad77d8d2be72fdfde22b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
