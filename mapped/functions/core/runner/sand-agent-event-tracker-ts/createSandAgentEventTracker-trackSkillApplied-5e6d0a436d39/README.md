# `createSandAgentEventTracker/trackSkillApplied`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-event-tracker.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-event-tracker-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534957-534976](../../../../../../reference/runtime/sand-eval-runner.cjs#L534957-L534976) | `ArrowFunctionExpression` | não | `ctx, skill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534957-534976](../../../../../../reference/runtime/sand-eval-runner.cjs#L534957-L534976) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:534957

Chamadas escritas diretamente neste corpo: `Date.now`, `auditor.record`, `getConversationId`, `getRequestId`, `getRootParentRequestId`, `options2.actionAuditor`, `options2.fallback.trackSkillApplied`, `options2.getConversationId`, `options2.resolveBoxId`, `options2.skills`, `skillActivatedAction`.

SHA-256 do trecho: `d9692acff7eb88de004907c07e2afbaa1ff61eca5d6a8812e39a683ff4e052c0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
