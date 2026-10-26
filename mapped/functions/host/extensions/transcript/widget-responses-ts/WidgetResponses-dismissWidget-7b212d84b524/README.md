# `WidgetResponses.dismissWidget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782832-782857](../../../../../../../reference/runtime/host-main.cjs#L782832-L782857) | `method` | sim | `{     entryId,     agentId   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782832-782857](../../../../../../../reference/runtime/host-main.cjs#L782832-L782857) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:782832

Chamadas escritas diretamente neste corpo: `findEntry`, `this.tm.roster.emit`, `this.tm.sessions.activeSession.db.updateTranscriptEntry`, `this.tm.sessions.ensureActionTarget`, `updateEntry`.

SHA-256 do trecho: `ee7d99906e18434accd2e1c47b1127f96a30da6608eb31cc7adc6cab695b925f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
