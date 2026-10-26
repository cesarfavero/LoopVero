# `RoomDeliveryRecord.unseen`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/room-delivery.ts` · [README do módulo](../../../../../modules/core/groups/room-delivery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737719-737731](../../../../../../reference/runtime/host-main.cjs#L737719-L737731) | `method` | não | `memberId, history` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737719-737731](../../../../../../reference/runtime/host-main.cjs#L737719-L737731) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:737719

Chamadas escritas diretamente neste corpo: `history.forEach`, `lastOwnPosition`, `this.members.get`.

SHA-256 do trecho: `7b53bffc90cf4607387e605ef41dfcced13a9960ccdd155ae96f6e7d9cac9aab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
