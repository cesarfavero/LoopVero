# `DraftSends.discardDraft`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/drafts/draft-sends.ts` · [README do módulo](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737195-737215](../../../../../../../../reference/runtime/host-main.cjs#L737195-L737215) | `method` | sim | `{     entryId,     agentId   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737195-737215](../../../../../../../../reference/runtime/host-main.cjs#L737195-L737215) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:737195

Chamadas escritas diretamente neste corpo: `.find`, `isDraftMessage`, `session.db.updateTranscriptEntry`, `this.emitDraftEntryUpdate`, `this.readSessionTranscript`, `this.resolveTargetSession`.

SHA-256 do trecho: `00aca7be87c53f13acbde4df898a9957a276d115654c95cf7b561ddf0935e1bc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
