# `RoomDeliveryRecord.delivery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/room-delivery.ts` · [README do módulo](../../../../../modules/core/groups/room-delivery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737774-737781](../../../../../../reference/runtime/host-main.cjs#L737774-L737781) | `method` | não | `memberId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737774-737781](../../../../../../reference/runtime/host-main.cjs#L737774-L737781) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:737774

Chamadas escritas diretamente neste corpo: `this.members.get`, `this.members.set`.

Alvos de atribuição ou incremento: `delivery`.

SHA-256 do trecho: `af35690717f746afb0552f4ee67b0c93db56f3760122f95b525f7826c471ae27`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
