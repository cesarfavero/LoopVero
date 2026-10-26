# `WidgetResponses.expireAllPendingCookieOriginApprovalCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782650-782694](../../../../../../../reference/runtime/host-main.cjs#L782650-L782694) | `method` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782650-782694](../../../../../../../reference/runtime/host-main.cjs#L782650-L782694) | 3 | 1 | 2 | 1 | 0 | 3 |

### host:782650

Chamadas escritas diretamente neste corpo: `reportSweepFailure`, `this.settlePendingCookieOriginApprovalsOnSession`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingCookieOriginApprovals`, `this.tm.sessionStore.listAgentIds`.

Alvos de atribuição ou incremento: `agentIds`, `expired`.

SHA-256 do trecho: `54d182a3e71075ee8aea2572a55bf74c6d0faada16edc181c360fc0e90184d09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
