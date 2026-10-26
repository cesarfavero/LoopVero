# `GroupChatGlue.setGroupMembers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738470-738502](../../../../../../../reference/runtime/host-main.cjs#L738470-L738502) | `method` | sim | `groupId, memberIds, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738470-738502](../../../../../../../reference/runtime/host-main.cjs#L738470-L738502) | 5 | 0 | 3 | 3 | 1 | 0 |

### host:738470

Chamadas escritas diretamente neste corpo: `.find`, `.map`, `.slice`, `allAgents.filter`, `allAgents.map`, `assertMembersAreNotGroups`, `currentConfig.memberIds.includes`, `new SandGroupMembersUnavailableError`, `new Set`, `requested.filter`, `this.localGroupConfig`, `this.tm.roster.emitAgents`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.getAgentDir`, `this.tm.sessionStore.listAgents`, `writeSandGroupConfig`.

Alvos de lançamento explícito: `SandGroupMembersUnavailableError`.

SHA-256 do trecho: `0fb188f64c9374b9c2cc51d3c2250b2af3298c9ddfd4c3ab86ec2d0dc73443e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
