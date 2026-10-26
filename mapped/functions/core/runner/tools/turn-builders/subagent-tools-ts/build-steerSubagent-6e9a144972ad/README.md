# `build/steerSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/turn-builders/subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781159-781159](../../../../../../../../reference/runtime/host-main.cjs#L781159-L781159) | `ArrowFunctionExpression` | não | `subagentAgentId, message` |
| [host:781165-781165](../../../../../../../../reference/runtime/host-main.cjs#L781165-L781165) | `ArrowFunctionExpression` | não | `subagentAgentId, message` |
| [evaluation:581506-581506](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581506-L581506) | `ArrowFunctionExpression` | não | `subagentAgentId, message` |
| [evaluation:581512-581512](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581512-L581512) | `ArrowFunctionExpression` | não | `subagentAgentId, message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781159-781159](../../../../../../../../reference/runtime/host-main.cjs#L781159-L781159) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781159 usa retorno implícito de arrow function.
| [host:781165-781165](../../../../../../../../reference/runtime/host-main.cjs#L781165-L781165) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781165 usa retorno implícito de arrow function.
| [evaluation:581506-581506](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581506-L581506) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581506 usa retorno implícito de arrow function.
| [evaluation:581512-581512](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581512-L581512) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581512 usa retorno implícito de arrow function.

### host:781159

Chamadas escritas diretamente neste corpo: `detached.steer`.

SHA-256 do trecho: `f21e3055dc4b55ac37a5044eb356ddcdca51b2d9a685196fa8c25c96461072f2`.

### host:781165

Chamadas escritas diretamente neste corpo: `host.steerSubagent`.

SHA-256 do trecho: `9bb065fdae69afe00d0f56d1b6ba971f6696076f5b343ca9996583e8219edc1c`.

### evaluation:581506

Chamadas escritas diretamente neste corpo: `detached.steer`.

SHA-256 do trecho: `f21e3055dc4b55ac37a5044eb356ddcdca51b2d9a685196fa8c25c96461072f2`.

### evaluation:581512

Chamadas escritas diretamente neste corpo: `host.steerSubagent`.

SHA-256 do trecho: `9bb065fdae69afe00d0f56d1b6ba971f6696076f5b343ca9996583e8219edc1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
