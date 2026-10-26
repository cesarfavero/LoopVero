# `listPromotableRooms`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/promotable-rooms.ts` · [README do módulo](../../../../modules/host/promotable-rooms-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491649-491695](../../../../../reference/runtime/host-main.cjs#L491649-L491695) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491649-491695](../../../../../reference/runtime/host-main.cjs#L491649-L491695) | 3 | 2 | 2 | 1 | 1 | 1 |

### host:491649

Chamadas escritas diretamente neste corpo: `.run`, `classifyBoxRoomSeats`, `deps.isTurnInFlight`, `deps.listAgents`, `quiet.push`, `quiet.slice`, `skipped2.push`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `1ee15b043fe22e3b00436f703a053a7dbc74770a8d8e5802232a873e20b5247d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
