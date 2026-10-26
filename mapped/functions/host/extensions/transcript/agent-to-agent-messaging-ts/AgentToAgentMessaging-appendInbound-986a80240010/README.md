# `AgentToAgentMessaging.appendInbound`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734586-734605](../../../../../../../reference/runtime/host-main.cjs#L734586-L734605) | `method` | sim | `toAgentId, inbound` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734586-734605](../../../../../../../reference/runtime/host-main.cjs#L734586-L734605) | 1 | 0 | 1 | 3 | 0 | 2 |

### host:734586

Chamadas escritas diretamente neste corpo: `__callDispose`, `__using`, `this.appendAgentInboundEntries`, `this.tm.groupChat.isGroupSession`, `this.tm.sessions.leaseBackgroundSession`.

Alvos de atribuição ou incremento: `leased`.

SHA-256 do trecho: `96fe8b0ff47cec81ec6d96018047441a9e2c835af6ecc09d242a21ad847d7380`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
