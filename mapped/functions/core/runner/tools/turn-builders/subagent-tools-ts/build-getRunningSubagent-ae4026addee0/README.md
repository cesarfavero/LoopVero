# `build/getRunningSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/turn-builders/subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781158-781158](../../../../../../../../reference/runtime/host-main.cjs#L781158-L781158) | `ArrowFunctionExpression` | não | `subagentAgentId` |
| [host:781164-781164](../../../../../../../../reference/runtime/host-main.cjs#L781164-L781164) | `ArrowFunctionExpression` | não | `subagentAgentId` |
| [evaluation:581505-581505](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581505-L581505) | `ArrowFunctionExpression` | não | `subagentAgentId` |
| [evaluation:581511-581511](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581511-L581511) | `ArrowFunctionExpression` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781158-781158](../../../../../../../../reference/runtime/host-main.cjs#L781158-L781158) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781158 usa retorno implícito de arrow function.
| [host:781164-781164](../../../../../../../../reference/runtime/host-main.cjs#L781164-L781164) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781164 usa retorno implícito de arrow function.
| [evaluation:581505-581505](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581505-L581505) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581505 usa retorno implícito de arrow function.
| [evaluation:581511-581511](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581511-L581511) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581511 usa retorno implícito de arrow function.

### host:781158

Chamadas escritas diretamente neste corpo: `detached.getRunning`.

SHA-256 do trecho: `452bc4026551300b5b6b9a483747f3f0bf381c952dc8e048a8cf5531c2f0f0e9`.

### host:781164

Chamadas escritas diretamente neste corpo: `host.getRunningSubagent`.

SHA-256 do trecho: `e84beaf46460979084bf1c1a69749367a2d9611be35662c02e36f48bc10b1971`.

### evaluation:581505

Chamadas escritas diretamente neste corpo: `detached.getRunning`.

SHA-256 do trecho: `452bc4026551300b5b6b9a483747f3f0bf381c952dc8e048a8cf5531c2f0f0e9`.

### evaluation:581511

Chamadas escritas diretamente neste corpo: `host.getRunningSubagent`.

SHA-256 do trecho: `e84beaf46460979084bf1c1a69749367a2d9611be35662c02e36f48bc10b1971`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
