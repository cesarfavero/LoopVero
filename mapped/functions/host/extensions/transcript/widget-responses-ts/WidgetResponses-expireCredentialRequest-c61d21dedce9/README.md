# `WidgetResponses.expireCredentialRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782869-782893](../../../../../../../reference/runtime/host-main.cjs#L782869-L782893) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782869-782893](../../../../../../../reference/runtime/host-main.cjs#L782869-L782893) | 7 | 0 | 2 | 3 | 0 | 0 |

### host:782869

Chamadas escritas diretamente neste corpo: `session.agentStore.dispose`, `session.db.close`, `session.db.getEntryById`, `session.db.updateTranscriptEntry`, `this.tm.clock.now`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.openSession`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.liveSessions.get`, `updateEntry`.

SHA-256 do trecho: `5dd4818591c6a98dcd05c076dcc20741c0617fe982ed0093515056e3444d7763`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
