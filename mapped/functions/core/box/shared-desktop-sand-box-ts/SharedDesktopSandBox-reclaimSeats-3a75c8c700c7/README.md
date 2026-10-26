# `SharedDesktopSandBox.reclaimSeats`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554479-554493](../../../../../../reference/runtime/host-main.cjs#L554479-L554493) | `method` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554479-554493](../../../../../../reference/runtime/host-main.cjs#L554479-L554493) | 2 | 0 | 4 | 1 | 0 | 0 |

### host:554479

Chamadas escritas diretamente neste corpo: `.filter`, `this.followCurrentSeatTable`, `this.freeDeletedSeatsOf`, `this.freeStaleUnstartedSeats`, `this.mayReapUnstartedSeats`, `this.refusedForkWindows.clear`.

SHA-256 do trecho: `e4e11c32320a0958a9cc9ea5983a8a879f784e7e1074692b666a19614395c70b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
