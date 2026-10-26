# `build/liveBrowserHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/box-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779108-779118](../../../../../../../../reference/runtime/host-main.cjs#L779108-L779118) | `ArrowFunctionExpression` | sim | `ctx` |
| [evaluation:578842-578852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578842-L578852) | `ArrowFunctionExpression` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779108-779118](../../../../../../../../reference/runtime/host-main.cjs#L779108-L779118) | 0 | 0 | 2 | 0 | 0 | 0 |

A ocorrência em host:779108 usa retorno implícito de arrow function.
| [evaluation:578842-578852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578842-L578852) | 0 | 0 | 2 | 0 | 0 | 0 |

A ocorrência em evaluation:578842 usa retorno implícito de arrow function.

### host:779108

Chamadas escritas diretamente neste corpo: `createSandBrowserOpRunner`, `host.gates.noMarkTargets`, `host.gates.noRuntimeEnable`, `host.resolveBoxId`, `readLivePageHost`, `resolveAgentDisplay`.

SHA-256 do trecho: `6bee8c0b7fdda1aa346a4289e0bdd4c3547996f085c8482f5bde911219ee8e25`.

### evaluation:578842

Chamadas escritas diretamente neste corpo: `createSandBrowserOpRunner`, `host.gates.noMarkTargets`, `host.gates.noRuntimeEnable`, `host.resolveBoxId`, `readLivePageHost`, `resolveAgentDisplay`.

SHA-256 do trecho: `6bee8c0b7fdda1aa346a4289e0bdd4c3547996f085c8482f5bde911219ee8e25`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
