# `AgentLifecycle.createAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733469-733487](../../../../../../../reference/runtime/host-main.cjs#L733469-L733487) | `method` | sim | `profile, origin = "user", options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733469-733487](../../../../../../../reference/runtime/host-main.cjs#L733469-L733487) | 1 | 0 | 5 | 1 | 1 | 0 |

### host:733469

Chamadas escritas diretamente neste corpo: `Date.now`, `getTranscript`, `new SandAgentLifecycleError`, `this.mintAgentSession`, `this.tm.roster.emit`, `this.tm.roster.emitAgents`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.markSessionViewed`, `this.tm.sessionStore.summarizeOpenSession`, `this.tm.sessions.clearActiveTranscript`, `this.tm.sessions.invalidateDeferredActivation`, `this.tm.sessions.markSessionLeftBehind`, `this.tm.sessions.replaceSession`.

Alvos de lançamento explícito: `SandAgentLifecycleError`.

SHA-256 do trecho: `89344842f60c655c5dd86742dab9397585aa5ace60fd37f14dc98a146399b747`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
