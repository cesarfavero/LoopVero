# `SharedDesktopSandBox.establishFork`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554844-554870](../../../../../../reference/runtime/host-main.cjs#L554844-L554870) | `method` | sim | `ctx, agentId, windowIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554844-554870](../../../../../../reference/runtime/host-main.cjs#L554844-L554870) | 8 | 0 | 2 | 5 | 0 | 0 |

### host:554844

Chamadas escritas diretamente neste corpo: `this.agentWindowTokens.get`, `this.agentWindows.get`, `this.commitSeatChanges`, `this.downForks.add`, `this.downForks.delete`, `this.dropCachedSeat`, `this.establishedForks.add`, `this.holdsSeat`, `this.unstartedSeats.delete`, `this.unstartedTokens.delete`, `this.unstartedTokens.has`, `this.windowStillOwned`.

SHA-256 do trecho: `0f6ed75ffb3c9400e7786e4d6b2077b43d1aa3f92d613c19368609a9e2710c82`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
