# `createTurnPerformanceObservation/firstAck`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547859-547935](../../../../../../reference/runtime/sand-eval-runner.cjs#L547859-L547935) | `FunctionExpression` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547859-547935](../../../../../../reference/runtime/sand-eval-runner.cjs#L547859-L547935) | 6 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547859

Chamadas escritas diretamente neste corpo: `clock.monotonicNow`, `maybeEmitTtfaTrace`, `onceModelKnown`, `safelyObserve`.

Alvos de atribuição ou incremento: `firstAckKind`, `firstMessageAt`, `stepsBeforeFirstMessage`.

SHA-256 do trecho: `4fbc78571d701aa47273e89adf30b08204d4c965c5a65f86d178558088bd3992`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
