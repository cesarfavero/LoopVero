# `WidgetResponses.expireAllPendingVirtualCardApprovalCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782788-782831](../../../../../../../reference/runtime/host-main.cjs#L782788-L782831) | `method` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782788-782831](../../../../../../../reference/runtime/host-main.cjs#L782788-L782831) | 3 | 1 | 2 | 1 | 0 | 3 |

### host:782788

Chamadas escritas diretamente neste corpo: `reportSweepFailure`, `this.settlePendingVirtualCardOnSession`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingVirtualCardApprovals`, `this.tm.sessionStore.listAgentIds`.

Alvos de atribuição ou incremento: `agentIds`.

SHA-256 do trecho: `5b7276a3d425749a5e708db765eedbc54c3340949f09b181dd512edd4d75540b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
