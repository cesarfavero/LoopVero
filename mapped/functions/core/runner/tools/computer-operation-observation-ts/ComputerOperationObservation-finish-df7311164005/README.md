# `ComputerOperationObservation.finish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-operation-observation.ts` · [README do módulo](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776272-776315](../../../../../../../reference/runtime/host-main.cjs#L776272-L776315) | `method` | não | `(nenhum)` |
| [evaluation:575926-575969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575926-L575969) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776272-776315](../../../../../../../reference/runtime/host-main.cjs#L776272-L776315) | 3 | 0 | 0 | 4 | 0 | 2 |
| [evaluation:575926-575969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575926-L575969) | 3 | 0 | 0 | 4 | 0 | 2 |

### host:776272

Chamadas escritas diretamente neste corpo: `Math.max`, `attempts.increment`, `combinedMode`, `getConversationId`, `getRequestId`, `this.clock.monotonicNow`, `this.options.reportComputerOperation`, `this.options.span.setAttributes`, `this.options.span.setOutcome`.

Alvos de atribuição ou incremento: `metricRecorded`, `this.finished`.

SHA-256 do trecho: `2f2a53c8f29100e0fefebde0f9d1410f61dab2d5b2ed016c2c8a1734f2355f78`.

### evaluation:575926

Chamadas escritas diretamente neste corpo: `Math.max`, `attempts.increment`, `combinedMode`, `getConversationId`, `getRequestId`, `this.clock.monotonicNow`, `this.options.reportComputerOperation`, `this.options.span.setAttributes`, `this.options.span.setOutcome`.

Alvos de atribuição ou incremento: `metricRecorded`, `this.finished`.

SHA-256 do trecho: `2f2a53c8f29100e0fefebde0f9d1410f61dab2d5b2ed016c2c8a1734f2355f78`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
