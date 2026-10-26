# `createTurnObservation/flushPendingAwaitsOnUnwind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588712-588725](../../../../../../reference/runtime/sand-eval-runner.cjs#L588712-L588725) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588712-588725](../../../../../../reference/runtime/sand-eval-runner.cjs#L588712-L588725) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:588712

Chamadas escritas diretamente neste corpo: `cancelledAwaitOutcome`, `onTurnAwait`, `pendingAwaits.clear`, `pendingAwaits.values`.

Alvos de atribuição ou incremento: `awaitObservationCount`.

SHA-256 do trecho: `d71f6c3c218d080d037ef6985282dbdb58090225b5862f1a3f3fab3d180ecb0b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
