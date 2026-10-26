# `build/onComputerAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/box-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778877-778880](../../../../../../../../reference/runtime/host-main.cjs#L778877-L778880) | `ArrowFunctionExpression` | não | `action` |
| [evaluation:578611-578614](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578611-L578614) | `ArrowFunctionExpression` | não | `action` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778877-778880](../../../../../../../../reference/runtime/host-main.cjs#L778877-L778880) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:778877 usa retorno implícito de arrow function.
| [evaluation:578611-578614](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578611-L578614) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:578611 usa retorno implícito de arrow function.

### host:778877

Chamadas escritas diretamente neste corpo: `host.getTranscriptId`, `host.onComputerAction`.

SHA-256 do trecho: `f3a4f9654d2e88ef03a0ad15bbde492d74670d900971df7ebfe31c8e951a4e72`.

### evaluation:578611

Chamadas escritas diretamente neste corpo: `host.getTranscriptId`, `host.onComputerAction`.

SHA-256 do trecho: `f3a4f9654d2e88ef03a0ad15bbde492d74670d900971df7ebfe31c8e951a4e72`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
