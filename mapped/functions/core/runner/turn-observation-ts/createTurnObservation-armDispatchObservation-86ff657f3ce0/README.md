# `createTurnObservation/armDispatchObservation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588774-588885](../../../../../../reference/runtime/sand-eval-runner.cjs#L588774-L588885) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588774-588885](../../../../../../reference/runtime/sand-eval-runner.cjs#L588774-L588885) | 3 | 0 | 0 | 1 | 0 | 1 |

### evaluation:588774

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.max`, `Math.round`, `Number.isFinite`, `bucketClockSkewDeltaMs`, `clock.monotonicNow`, `deps.resolveModelId`, `deps.runCtx.withName`, `deps.setRunAttribute`, `errorLogTag`, `new Date`, `onSendDispatch`, `process.stderr.write`, `recordCompletedSpanIfParented`, `sanitizeCrossClockDurationMs`.

SHA-256 do trecho: `08637a404e45d07392f9a479e5e7f99ef86f73fe03bb76ca0dc02448cfe35b90`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
