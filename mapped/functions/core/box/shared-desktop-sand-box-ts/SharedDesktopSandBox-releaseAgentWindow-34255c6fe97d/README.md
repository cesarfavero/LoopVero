# `SharedDesktopSandBox.releaseAgentWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555074-555091](../../../../../../reference/runtime/host-main.cjs#L555074-L555091) | `method` | sim | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555074-555091](../../../../../../reference/runtime/host-main.cjs#L555074-L555091) | 8 | 0 | 2 | 5 | 0 | 0 |

### host:555074

Chamadas escritas diretamente neste corpo: `current2.assignments.get`, `current2.tokens.get`, `this.adoptUnseatedAssignments`, `this.agentWindowTokens.get`, `this.agentWindows.get`, `this.dropCachedSeat`, `this.queueSeatChanges`, `this.readCurrentSeatTable`, `this.stopForkWindow`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `bc7df84b52db40287f2d47fe53aac4bd5f22a9b9df638ad624059100ef3fc451`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
