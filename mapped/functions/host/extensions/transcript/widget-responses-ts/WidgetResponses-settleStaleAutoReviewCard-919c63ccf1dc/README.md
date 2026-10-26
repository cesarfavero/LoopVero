# `WidgetResponses.settleStaleAutoReviewCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782513-782529](../../../../../../../reference/runtime/host-main.cjs#L782513-L782529) | `method` | sim | `{     agentId,     entryId,     requestId: requestId2   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782513-782529](../../../../../../../reference/runtime/host-main.cjs#L782513-L782529) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:782513

Chamadas escritas diretamente neste corpo: `.find`, `this.settlePendingAutoReviewApprovalsOnSession`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingAutoReviewApprovals`, `this.tm.sessionStore.readAgentTranscriptEntries`.

SHA-256 do trecho: `984c805f6bb65e58055eee814c59e55e2843b94ea5925368735f9c41c30bf64a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
