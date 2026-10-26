# `RoomDeliveryRecord.rearmAfterFailedTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/room-delivery.ts` · [README do módulo](../../../../../modules/core/groups/room-delivery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737748-737755](../../../../../../reference/runtime/host-main.cjs#L737748-L737755) | `method` | não | `memberId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737748-737755](../../../../../../reference/runtime/host-main.cjs#L737748-L737755) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:737748

Chamadas escritas diretamente neste corpo: `this.delivery`.

Alvos de atribuição ou incremento: `delivery.dispatchedThrough`, `delivery.failedInARow`, `delivery.settledAt`, `this.clock`.

SHA-256 do trecho: `c481f929afca02d02537ed4ad96d5f51f82086a6975630cae89987fe11b1dc2c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
