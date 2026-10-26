# `AgentLifecycle.runDeleteAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733634-733726](../../../../../../../reference/runtime/host-main.cjs#L733634-L733726) | `method` | sim | `ids` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733634-733726](../../../../../../../reference/runtime/host-main.cjs#L733634-L733726) | 6 | 5 | 16 | 4 | 0 | 1 |

### host:733634

Chamadas escritas diretamente neste corpo: `.filter`, `.find`, `Date.now`, `active.agentStore.dispose`, `emptyDeleteStats`, `errorLogTag`, `getTranscript`, `ids.has`, `new Set`, `retained.agentStore.dispose`, `this.deleteAgentFiles`, `this.deleteListedAndClearRoster`, `this.interruptAgentForDeletion`, `this.tm.boxHandoff.awaitingSink.clear`, `this.tm.boxHandoff.boxHandoffs.delete`, `this.tm.hostLog`, `this.tm.onAgentForgotten`, `this.tm.roster.emit`, `this.tm.roster.emitAgents`, `this.tm.runLifecycle.closeSessionWhenIdle`, `this.tm.runLifecycle.watchActiveSession`, `this.tm.sessionStore.getTranscriptEntries`, `this.tm.sessionStore.listAgentRecordIds`, `this.tm.sessionStore.listAgents`, `this.tm.sessionStore.markSessionViewed`, `this.tm.sessions.clearActiveSession`, `this.tm.sessions.clearActiveTranscript`, `this.tm.sessions.invalidateDeferredActivation`, `this.tm.sessions.liveSessions.delete`, `this.tm.sessions.liveSessions.get`, `this.tm.sessions.openSessionOnce`, `this.tm.sessions.pendingSessionOpens.delete`, `this.tm.sessions.pendingSessionOpens.get`, `this.tm.sessions.restoreSession`, `this.tm.sessions.setActiveSession`, `this.tm.sessions.setActiveTranscript`, `this.tm.sessions.settledOpen`, `this.tm.trayErrors.clearForAgent`.

Alvos de atribuição ou incremento: `nextSession`, `stats.deletedActive`, `stats.diskDeleteMs`, `stats.drainMs`, `stats.successorMs`, `this.tm.sessions.loaded`.

SHA-256 do trecho: `9b9f786c42f95f367739a6f6b8c70ab3dbff55222dad6773beb04dc77b04f516`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
