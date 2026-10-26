# `GroupChatGlue.runTemporalGroupMemberTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738652-738702](../../../../../../../reference/runtime/host-main.cjs#L738652-L738702) | `method` | sim | `roomSession, request5, isRoomTurnCurrent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738652-738702](../../../../../../../reference/runtime/host-main.cjs#L738652-L738702) | 7 | 0 | 2 | 7 | 0 | 1 |

### host:738652

Chamadas escritas diretamente neste corpo: `delegate.requestTemporalMemberTurn`, `isRoomTurnCurrent`, `members2.filter`, `parseAgentId`, `readSandGroupConfig`, `temporalOutcomeToMemberTurnOutcome`, `this.groupIdentityFor`, `this.reportMemberTurnOutcome`, `this.resolveGroupMembers`, `this.setTemporalMemberWorking`, `this.surfaceGroupMemberTurnError`.

SHA-256 do trecho: `6f6f218840a46320cf3eafe428ff28fa5594c886c72b0f8186965bd801697453`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
