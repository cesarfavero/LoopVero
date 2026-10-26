# `SharedDesktopSandBox.freeStaleUnstartedSeats`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554494-554519](../../../../../../reference/runtime/host-main.cjs#L554494-L554519) | `method` | sim | `ctx, table` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554494-554519](../../../../../../reference/runtime/host-main.cjs#L554494-L554519) | 4 | 2 | 1 | 0 | 0 | 0 |

### host:554494

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `freed.map`, `seats.filter`, `seats.push`, `table.tokens.get`, `table.unstarted.get`, `this.agentWindows.get`, `this.dropCachedSeat`, `this.establishedForks.has`, `this.now`, `this.queueSeatChanges`.

SHA-256 do trecho: `8432f3629539cba6fd9351d1c8536fca7e1ea408ba0083105b708b854596733c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
