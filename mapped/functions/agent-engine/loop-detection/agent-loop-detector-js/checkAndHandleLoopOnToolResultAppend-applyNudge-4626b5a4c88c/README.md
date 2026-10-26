# `checkAndHandleLoopOnToolResultAppend/applyNudge`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:311414-311437](../../../../../../reference/runtime/sand-eval-runner.cjs#L311414-L311437) | `ArrowFunctionExpression` | não | `loopResult2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311414-311437](../../../../../../reference/runtime/sand-eval-runner.cjs#L311414-L311437) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:311414

Chamadas escritas diretamente neste corpo: `appendMessage`, `createLoopReminderMessage`, `logShimFiring`, `multiMessageLoopNudge.applied`, `params.appliedNudgeFingerprints.add`, `params.appliedNudgeFingerprints.has`, `reportLoopMitigationObservation`.

SHA-256 do trecho: `244201444f2df0c19797454f1422b9747a62d10a24854353b34ef238a2592640`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
