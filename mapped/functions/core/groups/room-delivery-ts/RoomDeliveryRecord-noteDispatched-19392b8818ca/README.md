# `RoomDeliveryRecord.noteDispatched`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/room-delivery.ts` · [README do módulo](../../../../../modules/core/groups/room-delivery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737732-737738](../../../../../../reference/runtime/host-main.cjs#L737732-L737738) | `method` | não | `memberId, through` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737732-737738](../../../../../../reference/runtime/host-main.cjs#L737732-L737738) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737732

Chamadas escritas diretamente neste corpo: `this.delivery`.

Alvos de atribuição ou incremento: `delivery.dispatchedAt`, `delivery.dispatchedBefore`, `delivery.dispatchedThrough`, `delivery.settledAt`, `this.clock`.

SHA-256 do trecho: `fc1fc1a4ecc065d70bd100a93f26d10b581fb0404d0ca5ed9707050a56e49a03`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
