# `WidgetResponses.awaitBrokeredCredentialRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782894-782936](../../../../../../../reference/runtime/host-main.cjs#L782894-L782936) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782894-782936](../../../../../../../reference/runtime/host-main.cjs#L782894-L782936) | 7 | 0 | 3 | 3 | 0 | 1 |

### host:782894

Chamadas escritas diretamente neste corpo: `brokeredAccessOutcomeResolution`, `errorLogTag`, `reportHostDiagnostic`, `session.agentStore.dispose`, `session.db.close`, `session.db.getEntryById`, `session.db.updateTranscriptEntry`, `this.cancelCredentialRequestExpiry`, `this.tm.awaitBrokeredCredentialAccess`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.openSession`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.liveSessions.get`, `updateEntry`.

Alvos de atribuição ou incremento: `outcome`.

SHA-256 do trecho: `a23f0491e06495b00b3420c5a36eb4f60809297d640244969a6f6e2cbaa0bde7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
