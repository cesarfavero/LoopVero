# `SharedDesktopSandBox.claimSeat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554744-554756](../../../../../../reference/runtime/host-main.cjs#L554744-L554756) | `method` | sim | `ctx, agentId, windowIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554744-554756](../../../../../../reference/runtime/host-main.cjs#L554744-L554756) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:554744

Chamadas escritas diretamente neste corpo: `this.agentWindowTokens.get`, `this.commitSeatChanges`, `this.dropCachedSeat`, `this.followPersistedTable`, `this.now`, `this.unstartedTokens.add`.

SHA-256 do trecho: `0e8df255500e01f18916fadd20d6f612f802272a07dda7785a7973427629d623`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
