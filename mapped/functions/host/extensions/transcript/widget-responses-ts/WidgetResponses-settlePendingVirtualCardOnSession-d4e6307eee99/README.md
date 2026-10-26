# `WidgetResponses.settlePendingVirtualCardOnSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782756-782787](../../../../../../../reference/runtime/host-main.cjs#L782756-L782787) | `method` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782756-782787](../../../../../../../reference/runtime/host-main.cjs#L782756-L782787) | 10 | 1 | 0 | 2 | 0 | 0 |

### host:782756

Chamadas escritas diretamente neste corpo: `session.db.getTranscriptEntries`, `session.db.updateTranscriptEntry`, `settlePendingVirtualCardApprovalEntry`, `this.tm.roster.emit`, `this.tm.sessions.liveSessions.get`, `unlessRequestId`, `updateEntry`.

Alvos de atribuição ou incremento: `retired`.

SHA-256 do trecho: `4381e6cf797dea473e680af389de20dd24108b021d36cce3e8e9e31e4af16dc2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
