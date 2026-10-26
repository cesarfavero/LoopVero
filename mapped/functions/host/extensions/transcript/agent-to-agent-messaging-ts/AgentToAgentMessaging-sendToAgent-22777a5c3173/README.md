# `AgentToAgentMessaging.sendToAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734418-734472](../../../../../../../reference/runtime/host-main.cjs#L734418-L734472) | `method` | sim | `fromAgentId, toAgentId, text3, images = [], priority = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734418-734472](../../../../../../../reference/runtime/host-main.cjs#L734418-L734472) | 13 | 0 | 3 | 7 | 0 | 0 |

### host:734418

Chamadas escritas diretamente neste corpo: `Date.now`, `brandedId`, `clampAgentMessage`, `notes.join`, `notes.push`, `roster.find`, `this.appendAgentOutboundEntry`, `this.appendInbound`, `this.tm.postToGroup`, `this.tm.productAnalytics.trackEvent`, `this.tm.sessionStore.listAgents`, `this.tm.sessions.isAgentGone`.

SHA-256 do trecho: `2b939f04f36c020657cb94b4f85bb2766d578c26eddfb864bc28cc931b60938b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
