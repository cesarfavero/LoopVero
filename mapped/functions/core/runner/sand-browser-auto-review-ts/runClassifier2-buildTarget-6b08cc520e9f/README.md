# `runClassifier2/buildTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699839-699844](../../../../../../reference/runtime/host-main.cjs#L699839-L699844) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:513595-513600](../../../../../../reference/runtime/sand-eval-runner.cjs#L513595-L513600) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699839-699844](../../../../../../reference/runtime/host-main.cjs#L699839-L699844) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:699839 usa retorno implícito de arrow function.
| [evaluation:513595-513600](../../../../../../reference/runtime/sand-eval-runner.cjs#L513595-L513600) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:513595 usa retorno implícito de arrow function.

### host:699839

Chamadas escritas diretamente neste corpo: `buildSandBrowserClassifierRiskTarget`.

SHA-256 do trecho: `ab0db9a754e238c080e996ab6c63e852e0baa64684bd59172367adc25adcb48a`.

### evaluation:513595

Chamadas escritas diretamente neste corpo: `buildSandBrowserClassifierRiskTarget`.

SHA-256 do trecho: `ab0db9a754e238c080e996ab6c63e852e0baa64684bd59172367adc25adcb48a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
