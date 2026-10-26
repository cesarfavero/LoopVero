# `GroupChatGlue.runGroupMemberTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738642-738651](../../../../../../../reference/runtime/host-main.cjs#L738642-L738651) | `method` | sim | `roomSession, request5, isRoomTurnCurrent, traceCtx, lane = "background", requestSource, attachments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738642-738651](../../../../../../../reference/runtime/host-main.cjs#L738642-L738651) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:738642

Chamadas escritas diretamente neste corpo: `parseAgentId`, `this.memberKindOf`, `this.reportMemberTurnOutcome`, `this.runTemporalGroupMemberTurn`.

SHA-256 do trecho: `e3563c1212e0bc43f6717189d3234c670d7a292b9993221bf795c365c309cba0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
