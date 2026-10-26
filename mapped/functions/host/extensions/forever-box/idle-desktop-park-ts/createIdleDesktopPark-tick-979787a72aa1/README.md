# `createIdleDesktopPark/tick`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/idle-desktop-park.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/idle-desktop-park-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680031-680102](../../../../../../../reference/runtime/host-main.cjs#L680031-L680102) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680031-680102](../../../../../../../reference/runtime/host-main.cjs#L680031-L680102) | 10 | 2 | 2 | 5 | 0 | 1 |

### host:680031

Chamadas escritas diretamente neste corpo: `Math.floor`, `decideDesktopParks`, `deps.clock.monotonicNow`, `deps.desktops.parkAgentWindow`, `deps.desktops.snapshotForkDesktops`, `deps.liveAgentIds`, `deps.log`, `deps.readConfig`, `elapsedMs`, `errorLogTag`, `new Set`, `parseAgentId`, `results.push`, `seatKey`, `seatKeys.has`, `snapshot.seats.filter`, `snapshot.seats.map`, `unparked2.clear`, `unparked2.delete`, `unparked2.get`, `unparked2.keys`, `unparked2.set`.

Alvos de atribuição ou incremento: `idleClockStartMs`, `lastReading`, `outcome`, `unsupportedSince`.

SHA-256 do trecho: `7e4043565b7bfb250ee5e357981e8c9e7d2be1fea61620ac9311f38b90851bc2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
