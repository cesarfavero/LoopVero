# `DraftSends.appendConnectCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/drafts/draft-sends.ts` · [README do módulo](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737301-737323](../../../../../../../../reference/runtime/host-main.cjs#L737301-L737323) | `method` | não | `{     session,     connector,     serverId   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737301-737323](../../../../../../../../reference/runtime/host-main.cjs#L737301-L737323) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:737301

Chamadas escritas diretamente neste corpo: `Date.now`, `createSendMessageEntry`, `nextEntryId`, `session.db.appendTranscriptEntry`, `this.isSessionOnScreen`, `this.readSessionTranscript`, `this.tm.roster.emitAgentUpdate`, `this.tm.sendPipeline.appendSendMessageEntry`.

SHA-256 do trecho: `31ef982f0081f9587c2fb6d9faceda1ecb5e6fe696027f5719f5942026d7e1e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
