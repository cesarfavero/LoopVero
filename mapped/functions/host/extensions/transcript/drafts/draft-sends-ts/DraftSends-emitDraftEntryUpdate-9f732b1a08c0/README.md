# `DraftSends.emitDraftEntryUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/drafts/draft-sends.ts` · [README do módulo](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737324-737335](../../../../../../../../reference/runtime/host-main.cjs#L737324-L737335) | `method` | não | `session, entryId, updater` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737324-737335](../../../../../../../../reference/runtime/host-main.cjs#L737324-L737335) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:737324

Chamadas escritas diretamente neste corpo: `session.db.getEntryById`, `this.isSessionOnScreen`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `updateEntry`, `updater`.

SHA-256 do trecho: `a868458e2f4edbd3317cb79232f1de995a3ad1ed93b550200f5a4eaa08174b48`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
