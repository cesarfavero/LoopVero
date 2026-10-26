# `mergeSessionLiveOverlays`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-activity.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:710890-710943](../../../../../../../reference/runtime/host-main.cjs#L710890-L710943) | `FunctionDeclaration` | não | `sessions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710890-710943](../../../../../../../reference/runtime/host-main.cjs#L710890-L710943) | 13 | 2 | 0 | 2 | 0 | 0 |

### host:710890

Chamadas escritas diretamente neste corpo: `.sort`, `awaitingSessionIds.push`, `grokBotGroupChatRoomIdOf`, `groupTurns.push`, `liveOverlayRunningTurn`, `runningSessionIds.push`, `sandTaskSessionId`, `workingTaskSessionIds.push`.

Alvos de atribuição ou incremento: `awaitingUserResponse`, `boxHandoff`, `isRunningTurn`, `primary`.

SHA-256 do trecho: `27f2690c35b3a4e7802a29da1181b39315fb374b0b3b1cfcd9ecb9c5a207a73b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
