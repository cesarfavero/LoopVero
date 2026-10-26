# `createEventLoopTelemetry/onTick`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/event-loop-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/event-loop-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:456288-456309](../../../../../../../reference/runtime/host-main.cjs#L456288-L456309) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456288-456309](../../../../../../../reference/runtime/host-main.cjs#L456288-L456309) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:456288

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `import_node_perf_hooks.performance.eventLoopUtilization`, `monitor.percentile`, `monitor.reset`, `now`, `options2.report`, `resolveWindowEmit`, `toMs`.

Alvos de atribuição ou incremento: `lastUtilization`, `windowIndex`, `windowStartedAtMs`.

SHA-256 do trecho: `5091d9dd7f0c9717957a16a05269f279011ed031c79f87ddd67b54488df9b508`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
