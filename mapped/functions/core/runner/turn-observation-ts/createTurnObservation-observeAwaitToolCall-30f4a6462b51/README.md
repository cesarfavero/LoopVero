# `createTurnObservation/observeAwaitToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588687-588708](../../../../../../reference/runtime/sand-eval-runner.cjs#L588687-L588708) | `FunctionDeclaration` | não | `event, callId, toolCall2, awaitingUserSelection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588687-588708](../../../../../../reference/runtime/sand-eval-runner.cjs#L588687-L588708) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:588687

Chamadas escritas diretamente neste corpo: `awaitBlockUntilMs`, `cancelledAwaitOutcome`, `classifyCompletedAwaitOutcome`, `host.isActiveRunCanceled`, `onTurnAwait`, `pendingAwaits.delete`, `pendingAwaits.get`, `pendingAwaits.set`.

Alvos de atribuição ou incremento: `awaitObservationCount`.

SHA-256 do trecho: `48f29504ede61f6b13fe3c51968dc7c1e614aebb47af726c71ec03b2f09402d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
