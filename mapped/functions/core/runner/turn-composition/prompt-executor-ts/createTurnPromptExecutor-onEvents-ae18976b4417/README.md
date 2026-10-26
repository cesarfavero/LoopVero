# `createTurnPromptExecutor/onEvents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/turn-composition/prompt-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/prompt-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587425-587452](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587425-L587452) | `ArrowFunctionExpression` | não | `events` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587425-587452](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587425-L587452) | 2 | 2 | 0 | 0 | 0 | 0 |

### evaluation:587425

Chamadas escritas diretamente neste corpo: `actionAuditor.record`, `events.map`, `host.toolTargets.take`, `observeToolCallEvents`, `onToolCallEvents`, `toolResultAuditRecord`, `turnToolHost.getConversationId`, `turnToolHost.resolveBoxId`, `turnToolHost.toolDecisionAudit.settle`.

SHA-256 do trecho: `c46f8ded727409e06fdd073d5dbcc212050cadc463825a02ff02e0b5043cfbc8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
