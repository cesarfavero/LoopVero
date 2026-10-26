# `createRunnerLoopDetection/resolveTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483395-483406](../../../../../../reference/runtime/sand-eval-runner.cjs#L483395-L483406) | `ArrowFunctionExpression` | não | `requestId, attribution, stopOnRepeatTrip` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483395-483406](../../../../../../reference/runtime/sand-eval-runner.cjs#L483395-L483406) | 2 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:483395 usa retorno implícito de arrow function.

### evaluation:483395

Chamadas escritas diretamente neste corpo: `createSandLoopDetectionPolicy`, `mode`, `options2.getConversationId`, `options2.keepRepeatedReplies`, `options2.stopRepeatedLoops`.

SHA-256 do trecho: `737c70f0b32c988f2540fce44c67efbaec27facbca672aa078da492802ea8189`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
