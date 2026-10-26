# `external`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620014-620014](../../../../../reference/runtime/host-main.cjs#L620014-L620014) | `ArrowFunctionExpression` | não | `enrichments, context2` |
| [host:620021-620023](../../../../../reference/runtime/host-main.cjs#L620021-L620023) | `ArrowFunctionExpression` | não | `enrichments` |
| [evaluation:304368-304368](../../../../../reference/runtime/sand-eval-runner.cjs#L304368-L304368) | `ArrowFunctionExpression` | não | `enrichments, context2` |
| [evaluation:304375-304377](../../../../../reference/runtime/sand-eval-runner.cjs#L304375-L304377) | `ArrowFunctionExpression` | não | `enrichments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620014-620014](../../../../../reference/runtime/host-main.cjs#L620014-L620014) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:620014 usa retorno implícito de arrow function.
| [host:620021-620023](../../../../../reference/runtime/host-main.cjs#L620021-L620023) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:620021 usa retorno implícito de arrow function.
| [evaluation:304368-304368](../../../../../reference/runtime/sand-eval-runner.cjs#L304368-L304368) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:304368 usa retorno implícito de arrow function.
| [evaluation:304375-304377](../../../../../reference/runtime/sand-eval-runner.cjs#L304375-L304377) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:304375 usa retorno implícito de arrow function.

### host:620014

Chamadas escritas diretamente neste corpo: `renderTranscript`.

SHA-256 do trecho: `d25a6b347a418f8a2db383b669e0cc842e0173a010a12ffe948eb7f7db2c518c`.

### host:620021

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `724884a4b2b196c422e48a0c00f7985502d8430ad189781146fe7592fcf4ea7e`.

### evaluation:304368

Chamadas escritas diretamente neste corpo: `renderTranscript`.

SHA-256 do trecho: `d25a6b347a418f8a2db383b669e0cc842e0173a010a12ffe948eb7f7db2c518c`.

### evaluation:304375

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `724884a4b2b196c422e48a0c00f7985502d8430ad189781146fe7592fcf4ea7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
