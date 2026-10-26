# `createTurnRunShell/runTurn/onExceeded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591729-591734](../../../../../../reference/runtime/sand-eval-runner.cjs#L591729-L591734) | `ArrowFunctionExpression` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591729-591734](../../../../../../reference/runtime/sand-eval-runner.cjs#L591729-L591734) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:591729

Chamadas escritas diretamente neste corpo: `cancelRun`, `new SandRunAbortError`.

SHA-256 do trecho: `e26eff7482e511958ba75b1e18b225f514b0f4b8857dd3fdb2ac38a5ec48dae3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
