# `createTurnObservation/armDispatchObservation/observeFirstToken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588821-588870](../../../../../../reference/runtime/sand-eval-runner.cjs#L588821-L588870) | `ArrowFunctionExpression` | não | `chunkType` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588821-588870](../../../../../../reference/runtime/sand-eval-runner.cjs#L588821-L588870) | 3 | 0 | 0 | 1 | 0 | 1 |

### evaluation:588821

Chamadas escritas diretamente neste corpo: `clock.monotonicNow`, `deps.addRunEvent`, `deps.runCtx.withName`, `deps.setRunAttribute`, `emitObservation`, `errorLogTag`, `new Date`, `process.stderr.write`, `recordCompletedSpanIfParented`, `sanitizeCrossClockDurationMs`.

Alvos de atribuição ou incremento: `firstTokenObserved`, `pendingFirstToken`.

SHA-256 do trecho: `20882acdf2bcb2b672e00d1b4179b814ed166d1c7e3ff48ee3508298f4d8b22c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
