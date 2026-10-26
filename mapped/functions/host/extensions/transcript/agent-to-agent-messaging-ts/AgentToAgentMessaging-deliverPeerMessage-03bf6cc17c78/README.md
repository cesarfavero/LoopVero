# `AgentToAgentMessaging.deliverPeerMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734544-734577](../../../../../../../reference/runtime/host-main.cjs#L734544-L734577) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734544-734577](../../../../../../../reference/runtime/host-main.cjs#L734544-L734577) | 9 | 0 | 2 | 8 | 0 | 0 |

### host:734544

Chamadas escritas diretamente neste corpo: `Date.now`, `parseAgentId`, `this.appendInbound`, `this.rememberPeerMessageId`, `this.tm.groupChat.postToGroupWithStatus`.

SHA-256 do trecho: `2aa03436ebd7a290c6c4078cf0feee2e972309abd353b2b437f8c53f4bb97fb5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
