# `DraftSends.sendDraft`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/drafts/draft-sends.ts` · [README do módulo](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736981-737067](../../../../../../../../reference/runtime/host-main.cjs#L736981-L737067) | `method` | sim | `{     entryId,     draft,     agentId   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736981-737067](../../../../../../../../reference/runtime/host-main.cjs#L736981-L737067) | 8 | 0 | 2 | 6 | 0 | 0 |

### host:736981

Chamadas escritas diretamente neste corpo: `.find`, `buildDraftSendCall`, `isDraftMessage`, `replyFactVerified`, `session.db.updateTranscriptEntry`, `this.readSessionTranscript`, `this.resolveTargetSession`, `this.runClaimedDraftSend`, `this.tm.trayErrors.pushError`.

SHA-256 do trecho: `19caa8830df4750115014de8b7f57e5118760c8ddac93850dc6ffcad5b9936e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
