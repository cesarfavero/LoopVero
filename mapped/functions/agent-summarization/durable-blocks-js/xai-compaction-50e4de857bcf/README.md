# `xai-compaction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620000-620008](../../../../../reference/runtime/host-main.cjs#L620000-L620008) | `ArrowFunctionExpression` | não | `enrichments` |
| [host:620024-620024](../../../../../reference/runtime/host-main.cjs#L620024-L620024) | `ArrowFunctionExpression` | não | `enrichments` |
| [host:620031-620031](../../../../../reference/runtime/host-main.cjs#L620031-L620031) | `ArrowFunctionExpression` | não | `enrichments` |
| [evaluation:304354-304362](../../../../../reference/runtime/sand-eval-runner.cjs#L304354-L304362) | `ArrowFunctionExpression` | não | `enrichments` |
| [evaluation:304378-304378](../../../../../reference/runtime/sand-eval-runner.cjs#L304378-L304378) | `ArrowFunctionExpression` | não | `enrichments` |
| [evaluation:304385-304385](../../../../../reference/runtime/sand-eval-runner.cjs#L304385-L304385) | `ArrowFunctionExpression` | não | `enrichments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620000-620008](../../../../../reference/runtime/host-main.cjs#L620000-L620008) | 2 | 0 | 0 | 2 | 0 | 0 |
| [host:620024-620024](../../../../../reference/runtime/host-main.cjs#L620024-L620024) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:620024 usa retorno implícito de arrow function.
| [host:620031-620031](../../../../../reference/runtime/host-main.cjs#L620031-L620031) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:620031 usa retorno implícito de arrow function.
| [evaluation:304354-304362](../../../../../reference/runtime/sand-eval-runner.cjs#L304354-L304362) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304378-304378](../../../../../reference/runtime/sand-eval-runner.cjs#L304378-L304378) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:304378 usa retorno implícito de arrow function.
| [evaluation:304385-304385](../../../../../reference/runtime/sand-eval-runner.cjs#L304385-L304385) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:304385 usa retorno implícito de arrow function.

### host:620000

Chamadas escritas diretamente neste corpo: `unwrapPlanContent`.

SHA-256 do trecho: `e02e1afbded2d09fb3aeed75b8e03e31fbd2847e39ec4af7cb5fd8f5010d3b67`.

### host:620024

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `38a114257db688f40e90a405df092175185dcc1cf72113b3f7314db3eefc5881`.

### host:620031

Chamadas escritas diretamente neste corpo: `todoUpdateTag`.

SHA-256 do trecho: `5de0a7c7dd05d11f70f0bd47c43d449f4f6ef9f9b5c00d2e47933ba7753ba66e`.

### evaluation:304354

Chamadas escritas diretamente neste corpo: `unwrapPlanContent`.

SHA-256 do trecho: `e02e1afbded2d09fb3aeed75b8e03e31fbd2847e39ec4af7cb5fd8f5010d3b67`.

### evaluation:304378

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `38a114257db688f40e90a405df092175185dcc1cf72113b3f7314db3eefc5881`.

### evaluation:304385

Chamadas escritas diretamente neste corpo: `todoUpdateTag`.

SHA-256 do trecho: `5de0a7c7dd05d11f70f0bd47c43d449f4f6ef9f9b5c00d2e47933ba7753ba66e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
