# `AgentLifecycle.deleteListedAndClearRoster`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733727-733752](../../../../../../../reference/runtime/host-main.cjs#L733727-L733752) | `method` | sim | `ids` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733727-733752](../../../../../../../reference/runtime/host-main.cjs#L733727-L733752) | 0 | 2 | 3 | 1 | 0 | 0 |

### host:733727

Chamadas escritas diretamente neste corpo: `Date.now`, `emptyDeleteStats`, `getTranscript`, `this.deleteAgentFiles`, `this.interruptAgentForDeletion`, `this.tm.boxHandoff.awaitingSink.clear`, `this.tm.boxHandoff.boxHandoffs.delete`, `this.tm.onAgentForgotten`, `this.tm.roster.emit`, `this.tm.roster.emitAgents`, `this.tm.sessions.clearActiveSession`, `this.tm.sessions.clearActiveTranscript`, `this.tm.sessions.invalidateDeferredActivation`, `this.tm.sessions.liveSessions.delete`, `this.tm.sessions.pendingSessionOpens.delete`, `this.tm.trayErrors.clearForAgent`.

Alvos de atribuição ou incremento: `stats.diskDeleteMs`, `stats.drainMs`, `this.tm.sessions.loaded`.

SHA-256 do trecho: `643d19ef4974c54e141599ef9b9ae089d6935787f3567e505aaa6e8862a3fc85`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
