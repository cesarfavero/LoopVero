# `WidgetResponses.restoreCredentialRequestExpiryTimers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782419-782474](../../../../../../../reference/runtime/host-main.cjs#L782419-L782474) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782419-782474](../../../../../../../reference/runtime/host-main.cjs#L782419-L782474) | 5 | 2 | 3 | 1 | 0 | 3 |

### host:782419

Chamadas escritas diretamente neste corpo: `errorLogTag`, `parseCredentialRequest`, `reportHostDiagnostic`, `session.agentStore.dispose`, `session.db.close`, `session.db.getTranscriptEntries`, `this.awaitBrokeredCredentialRequest`, `this.scheduleCredentialRequestExpiry`, `this.tm.sessionStore.listAgentIds`, `this.tm.sessionStore.openSession`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.liveSessions.get`.

Alvos de atribuição ou incremento: `agentIds`, `session`.

SHA-256 do trecho: `78482e6b1977a3652ea4996625556f7e57ee4e2c979ff3396b51b972700bbdad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
