# `WidgetResponses.settleStaleLocalToolPermissionCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782582-782603](../../../../../../../reference/runtime/host-main.cjs#L782582-L782603) | `method` | sim | `{     agentId,     entryId,     requestId: requestId2,     status = "expired"   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782582-782603](../../../../../../../reference/runtime/host-main.cjs#L782582-L782603) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:782582

Chamadas escritas diretamente neste corpo: `.find`, `this.settlePendingLocalToolPermissionAsksOnSession`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingLocalToolPermissionAsks`, `this.tm.sessionStore.readAgentTranscriptEntries`.

SHA-256 do trecho: `32d3581978a3fd27b1767dc9fcb26d344b578d559df5ed4fb98fffb979815d5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
