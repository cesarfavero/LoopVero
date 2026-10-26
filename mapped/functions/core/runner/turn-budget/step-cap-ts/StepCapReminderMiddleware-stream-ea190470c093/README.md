# `StepCapReminderMiddleware.stream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/budgets-recovery/README.md).

**Módulo:** `core/runner/turn-budget/step-cap.ts` · [README do módulo](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587334-587340](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587334-L587340) | `method` | não | `ctx, invocationId, tools, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587334-587340](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587334-L587340) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587334

Chamadas escritas diretamente neste corpo: `remindedSinceLastSummary`, `stepCapWrapUpAtStep`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 do trecho: `2811eecea247e16155de16056c0861f11e7fdfaf53ed675792ed9aafb4de6d4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
