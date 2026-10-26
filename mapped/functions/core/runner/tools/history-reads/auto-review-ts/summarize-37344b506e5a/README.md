# `summarize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/history-reads/auto-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/history-reads/auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763141-763145](../../../../../../../../reference/runtime/host-main.cjs#L763141-L763145) | `ArrowFunctionExpression` | não | `target` |
| [evaluation:556109-556113](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556109-L556113) | `ArrowFunctionExpression` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763141-763145](../../../../../../../../reference/runtime/host-main.cjs#L763141-L763145) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:763141 usa retorno implícito de arrow function.
| [evaluation:556109-556113](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556109-L556113) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:556109 usa retorno implícito de arrow function.

### host:763141

Chamadas escritas diretamente neste corpo: `summarizeSandMcpAutoReviewAction`.

SHA-256 do trecho: `5ae897b9380e831d206c97067e72f8e1b2bff5f86adf897696806749fd920eab`.

### evaluation:556109

Chamadas escritas diretamente neste corpo: `summarizeSandMcpAutoReviewAction`.

SHA-256 do trecho: `5ae897b9380e831d206c97067e72f8e1b2bff5f86adf897696806749fd920eab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
