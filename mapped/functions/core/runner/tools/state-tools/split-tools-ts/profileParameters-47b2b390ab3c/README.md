# `profileParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771823-771838](../../../../../../../../reference/runtime/host-main.cjs#L771823-L771838) | `ArrowFunctionExpression` | não | `teamBot` |
| [evaluation:571056-571071](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571056-L571071) | `ArrowFunctionExpression` | não | `teamBot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771823-771838](../../../../../../../../reference/runtime/host-main.cjs#L771823-L771838) | 2 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:771823 usa retorno implícito de arrow function.
| [evaluation:571056-571071](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571056-L571071) | 2 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:571056 usa retorno implícito de arrow function.

### host:771823

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.optional`, `.trim`, `external_exports2.boolean`, `external_exports2.enum`, `external_exports2.object`, `external_exports2.string`, `nonEmptyTuple`.

SHA-256 do trecho: `d8d2565b71b2720196a30096be8540b0e3a027108d21eb296b2101fa4ace2681`.

### evaluation:571056

Chamadas escritas diretamente neste corpo: `.describe`, `.min`, `.optional`, `.trim`, `external_exports3.boolean`, `external_exports3.enum`, `external_exports3.object`, `external_exports3.string`, `nonEmptyTuple`.

SHA-256 do trecho: `833d8a97823b3cbda1c0ac6cfbd62a3187e298161134b2ae15b5a920191e29a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
