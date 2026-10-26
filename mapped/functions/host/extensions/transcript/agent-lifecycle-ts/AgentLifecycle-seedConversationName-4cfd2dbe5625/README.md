# `AgentLifecycle.seedConversationName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733783-733803](../../../../../../../reference/runtime/host-main.cjs#L733783-L733803) | `method` | sim | `{     id,     prompt   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733783-733803](../../../../../../../reference/runtime/host-main.cjs#L733783-L733803) | 4 | 0 | 3 | 1 | 0 | 0 |

### host:733783

Chamadas escritas diretamente neste corpo: `conversationNameFromPrompt`, `seedRoomProfileName`, `this.tm.roster.emitAgentUpdate`, `this.tm.roster.emitProfileChanged`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.lastKnownAgentNames.set`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.getAgentDir`, `this.tm.sessionStore.summarizeAgentById`, `this.tm.sessionStore.summarizeOpenSession`.

SHA-256 do trecho: `e3edb72fbb5e6db45a408ef76389c8ffe353078396901889ad5a2e165149bd05`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
