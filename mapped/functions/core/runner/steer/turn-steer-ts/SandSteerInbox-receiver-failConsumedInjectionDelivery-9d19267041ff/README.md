# `SandSteerInbox.receiver/failConsumedInjectionDelivery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/steer/turn-steer.ts` · [README do módulo](../../../../../../modules/core/runner/steer/turn-steer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589828-589834](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589828-L589834) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589828-589834](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589828-L589834) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:589828

Chamadas escritas diretamente neste corpo: `this.pending.unshift`.

Alvos de atribuição ou incremento: `this.poppedAwaitingTurn`.

SHA-256 do trecho: `c157328bb174debf03fb1c5aaa1f065993539fec3ae8355faf97ed2d5ff2dd7b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
