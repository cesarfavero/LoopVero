# `WidgetResponses.applyReaction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783146-783167](../../../../../../../reference/runtime/host-main.cjs#L783146-L783167) | `method` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783146-783167](../../../../../../../reference/runtime/host-main.cjs#L783146-L783167) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:783146

Chamadas escritas diretamente neste corpo: `findEntry`, `isCurrentReaction`, `session.db.getEntryById`, `session.db.updateTranscriptEntry`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessions.activeSession.db.updateTranscriptEntry`, `updateEntry`.

SHA-256 do trecho: `0a530317adcdbd87697256f410c65bbc8cd3494d12a62a912927497a5d277aa8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
