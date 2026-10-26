# `build/reviewSteer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/turn-builders/subagent-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781172-781197](../../../../../../../../reference/runtime/host-main.cjs#L781172-L781197) | `ArrowFunctionExpression` | sim | `steerCtx, steerArgs` |
| [evaluation:581519-581544](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581519-L581544) | `ArrowFunctionExpression` | sim | `steerCtx, steerArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781172-781197](../../../../../../../../reference/runtime/host-main.cjs#L781172-L781197) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:581519-581544](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581519-L581544) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:781172

Chamadas escritas diretamente neste corpo: `buildSandSubagentSteerReviewTarget`, `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandSubagentAction`, `subagentController.getRunningSubagent`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `176b48ab812845ccde9e5c2380d9fdd03ac5105e90764df4202f49c0df1ce049`.

### evaluation:581519

Chamadas escritas diretamente neste corpo: `buildSandSubagentSteerReviewTarget`, `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandSubagentAction`, `subagentController.getRunningSubagent`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `176b48ab812845ccde9e5c2380d9fdd03ac5105e90764df4202f49c0df1ce049`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
