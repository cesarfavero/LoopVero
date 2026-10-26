# `executorBuildsVisualsLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/multitask-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/multitask-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754466-754473](../../../../../../../reference/runtime/host-main.cjs#L754466-L754473) | `ArrowFunctionExpression` | não | `toolName` |
| [evaluation:537169-537176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537169-L537176) | `ArrowFunctionExpression` | não | `toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754466-754473](../../../../../../../reference/runtime/host-main.cjs#L754466-L754473) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:754466 usa retorno implícito de arrow function.
| [evaluation:537169-537176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537169-L537176) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:537169 usa retorno implícito de arrow function.

### host:754466

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `b486e11af460c0ef1435ab158045f1ecf7732ad644646ba34ef5d3c0103ff940`.

### evaluation:537169

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `b486e11af460c0ef1435ab158045f1ecf7732ad644646ba34ef5d3c0103ff940`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
