# `createTurnShellExecutorEntries/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-composition/shell-executors.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/shell-executors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587529-587532](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587529-L587532) | `ArrowFunctionExpression` | não | `ctx, args, options2` |
| [evaluation:587535-587538](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587535-L587538) | `ArrowFunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587529-587532](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587529-L587532) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:587535-587538](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587535-L587538) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:587529

Chamadas escritas diretamente neste corpo: `baseShellStream.execute`, `host.autoReviewGate.assertNoPendingApproval`.

SHA-256 do trecho: `603c24589009e739634a0056567a470dac7c771a47553604aa5ab3958323ab6d`.

### evaluation:587535

Chamadas escritas diretamente neste corpo: `baseBackgroundShell.execute`, `host.autoReviewGate.assertNoPendingApproval`.

SHA-256 do trecho: `4c417ed7e08504a0efc2fe58dfbf4f9256008577cc1d505c7817b9379e03961f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
