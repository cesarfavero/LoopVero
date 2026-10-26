# `AgentLifecycle.createBackgroundAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733488-733503](../../../../../../../reference/runtime/host-main.cjs#L733488-L733503) | `method` | sim | `profile, origin = "user", options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733488-733503](../../../../../../../reference/runtime/host-main.cjs#L733488-L733503) | 1 | 0 | 4 | 1 | 1 | 0 |

### host:733488

Chamadas escritas diretamente neste corpo: `new SandAgentLifecycleError`, `nextSession.agentStore.dispose`, `nextSession.db.close`, `nextSession.db.getTranscriptEntries`, `this.mintAgentSession`, `this.tm.roster.emitAgents`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.summarizeOpenSession`.

Alvos de lançamento explícito: `SandAgentLifecycleError`.

SHA-256 do trecho: `0831a9b3a1b4699b2988a41144350979bab89c1052d33c5ac373f0de4fffe779`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
