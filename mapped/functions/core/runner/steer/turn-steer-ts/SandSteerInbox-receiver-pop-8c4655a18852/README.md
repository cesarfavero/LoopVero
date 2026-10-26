# `SandSteerInbox.receiver/pop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/steer/turn-steer.ts` · [README do módulo](../../../../../../modules/core/runner/steer/turn-steer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589820-589826](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589820-L589826) | `ArrowFunctionExpression` | não | `_ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589820-589826](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589820-L589826) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:589820

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `this.pending.shift`, `this.settlePoppedAsDelivered`, `toRedactedConversationAction`.

Alvos de atribuição ou incremento: `this.poppedAwaitingTurn`.

SHA-256 do trecho: `649d3069dc6df106c472a2be2420548f87afb884ef82a04ce5720527b3a339f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
