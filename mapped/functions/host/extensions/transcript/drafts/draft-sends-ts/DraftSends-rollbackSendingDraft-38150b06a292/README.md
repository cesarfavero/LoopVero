# `DraftSends.rollbackSendingDraft`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/drafts/draft-sends.ts` · [README do módulo](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737362-737376](../../../../../../../../reference/runtime/host-main.cjs#L737362-L737376) | `method` | não | `session, entryId, draft` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737362-737376](../../../../../../../../reference/runtime/host-main.cjs#L737362-L737376) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:737362

Chamadas escritas diretamente neste corpo: `session.db.updateTranscriptEntry`, `this.emitDraftEntryUpdate`.

SHA-256 do trecho: `2b518d320a471f6c817a3d43973ee90eb43fcd0f5606bf0da137c03634b3dadc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
