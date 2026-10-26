# `createSandBrowserOpRunner/sensitiveRequest/downloadTerminal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726851-726859](../../../../../../../reference/runtime/host-main.cjs#L726851-L726859) | `ArrowFunctionExpression` | sim | `(nenhum)` |
| [evaluation:561466-561474](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561466-L561474) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726851-726859](../../../../../../../reference/runtime/host-main.cjs#L726851-L726859) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:726851 usa retorno implícito de arrow function.
| [evaluation:561466-561474](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561466-L561474) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:561466 usa retorno implícito de arrow function.

### host:726851

Chamadas escritas diretamente neste corpo: `.then`, `downloadFile`.

SHA-256 do trecho: `dfa37782ad23079e57e014f1c4d07ca066cc98ee8d5b3b7cfeb8101a05464f75`.

### evaluation:561466

Chamadas escritas diretamente neste corpo: `.then`, `downloadFile`.

SHA-256 do trecho: `cc22ac38601fec17a38865b14a02eed645b7ffac60aef079e316eafae863b3a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
