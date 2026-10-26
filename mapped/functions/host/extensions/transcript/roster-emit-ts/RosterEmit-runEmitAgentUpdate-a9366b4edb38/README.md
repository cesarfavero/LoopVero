# `RosterEmit.runEmitAgentUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/roster-emit.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739065-739121](../../../../../../../reference/runtime/host-main.cjs#L739065-L739121) | `method` | sim | `agentId, pendingSiblingAgentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739065-739121](../../../../../../../reference/runtime/host-main.cjs#L739065-L739121) | 6 | 0 | 7 | 9 | 0 | 2 |

### host:739065

Chamadas escritas diretamente neste corpo: `errorLogTag`, `isSameRosterRow`, `reconciled.find`, `reconciled.some`, `reportFallback`, `this.applySnapshotStamp`, `this.buildAgentSummary`, `this.cachedAgentSummaries.find`, `this.emitter.emit`, `this.replicaWriter.nextStamp`, `this.reserveSnapshotStamp`, `this.runEmitAgents`, `this.tm.hostLog`, `this.tm.runLifecycle.withRunStates`, `this.tm.sessions.getAnnouncedActiveAgentId`, `this.tm.sessions.restoreSession`, `upsertAgentSummary`.

Alvos de atribuição ou incremento: `this.cachedAgentSummaries`, `this.lastEmittedActiveAgentId`.

SHA-256 do trecho: `34ad41e4e7f08497fc556279e3d6823e33e287393cd38476cd352c1f79e02cab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
