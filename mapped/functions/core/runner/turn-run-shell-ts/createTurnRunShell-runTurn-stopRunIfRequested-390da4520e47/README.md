# `createTurnRunShell/runTurn/stopRunIfRequested`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591883-591904](../../../../../../reference/runtime/sand-eval-runner.cjs#L591883-L591904) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591883-591904](../../../../../../reference/runtime/sand-eval-runner.cjs#L591883-L591904) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591883

Chamadas escritas diretamente neste corpo: `cancelRun`, `isRunCompletionRequested`, `isRunStopped`, `new SandRunAbortError`.

Alvos de atribuição ou incremento: `pausedForUpgrade`.

SHA-256 do trecho: `1d57701060fc663e692b48e040bd6ce066f4e1c1e11d17130cff1349fb8c0837`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
