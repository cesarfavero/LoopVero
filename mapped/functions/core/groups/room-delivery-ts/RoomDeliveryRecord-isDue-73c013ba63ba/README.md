# `RoomDeliveryRecord.isDue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/room-delivery.ts` · [README do módulo](../../../../../modules/core/groups/room-delivery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737713-737715](../../../../../../reference/runtime/host-main.cjs#L737713-L737715) | `method` | não | `memberId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737713-737715](../../../../../../reference/runtime/host-main.cjs#L737713-L737715) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:737713

Chamadas escritas diretamente neste corpo: `isNewerThanLatestTurn`, `this.members.get`.

SHA-256 do trecho: `1d67cb7f3459ceb066e15cd27e8bd0105b45e03b856bfa7560294e11e40f63f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
