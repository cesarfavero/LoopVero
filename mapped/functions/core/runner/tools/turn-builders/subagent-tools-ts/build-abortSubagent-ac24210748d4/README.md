# `build/abortSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/turn-builders/subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781160-781160](../../../../../../../../reference/runtime/host-main.cjs#L781160-L781160) | `ArrowFunctionExpression` | não | `subagentAgentId` |
| [host:781166-781166](../../../../../../../../reference/runtime/host-main.cjs#L781166-L781166) | `ArrowFunctionExpression` | não | `subagentAgentId` |
| [evaluation:581507-581507](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581507-L581507) | `ArrowFunctionExpression` | não | `subagentAgentId` |
| [evaluation:581513-581513](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581513-L581513) | `ArrowFunctionExpression` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781160-781160](../../../../../../../../reference/runtime/host-main.cjs#L781160-L781160) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781160 usa retorno implícito de arrow function.
| [host:781166-781166](../../../../../../../../reference/runtime/host-main.cjs#L781166-L781166) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:781166 usa retorno implícito de arrow function.
| [evaluation:581507-581507](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581507-L581507) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581507 usa retorno implícito de arrow function.
| [evaluation:581513-581513](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581513-L581513) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:581513 usa retorno implícito de arrow function.

### host:781160

Chamadas escritas diretamente neste corpo: `detached.abort`.

SHA-256 do trecho: `d5a0dd909fd5eba7d8670c1a2a66801543d7b9e5a9effea3b5e77c03f2222d5c`.

### host:781166

Chamadas escritas diretamente neste corpo: `host.abortSubagent`.

SHA-256 do trecho: `63dfef79aa8163b6309a7235d9efb05d3792175bca18b130019f534fb4689f0e`.

### evaluation:581507

Chamadas escritas diretamente neste corpo: `detached.abort`.

SHA-256 do trecho: `d5a0dd909fd5eba7d8670c1a2a66801543d7b9e5a9effea3b5e77c03f2222d5c`.

### evaluation:581513

Chamadas escritas diretamente neste corpo: `host.abortSubagent`.

SHA-256 do trecho: `63dfef79aa8163b6309a7235d9efb05d3792175bca18b130019f534fb4689f0e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
