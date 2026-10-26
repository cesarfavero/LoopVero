# `build/liveBrowserHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769422-769432](../../../../../../../../reference/runtime/host-main.cjs#L769422-L769432) | `ArrowFunctionExpression` | sim | `ctx` |
| [evaluation:565069-565079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565069-L565079) | `ArrowFunctionExpression` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769422-769432](../../../../../../../../reference/runtime/host-main.cjs#L769422-L769432) | 0 | 0 | 2 | 0 | 0 | 0 |

A ocorrência em host:769422 usa retorno implícito de arrow function.
| [evaluation:565069-565079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565069-L565079) | 0 | 0 | 2 | 0 | 0 | 0 |

A ocorrência em evaluation:565069 usa retorno implícito de arrow function.

### host:769422

Chamadas escritas diretamente neste corpo: `createSandBrowserOpRunner`, `host.gates.noMarkTargets`, `host.gates.noRuntimeEnable`, `host.resolveBoxId`, `readLivePageHost`, `resolveAgentDisplay`.

SHA-256 do trecho: `5248e74a08ec019d738de9c627812b254c45fd853e3dd0bfba13be1fbc61b377`.

### evaluation:565069

Chamadas escritas diretamente neste corpo: `createSandBrowserOpRunner`, `host.gates.noMarkTargets`, `host.gates.noRuntimeEnable`, `host.resolveBoxId`, `readLivePageHost`, `resolveAgentDisplay`.

SHA-256 do trecho: `5248e74a08ec019d738de9c627812b254c45fd853e3dd0bfba13be1fbc61b377`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
