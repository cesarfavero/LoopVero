# `WidgetResponses.recordWidgetResponse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783085-783124](../../../../../../../reference/runtime/host-main.cjs#L783085-L783124) | `method` | não | `entryId, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783085-783124](../../../../../../../reference/runtime/host-main.cjs#L783085-L783124) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:783085

Chamadas escritas diretamente neste corpo: `findEntry`, `getMainTranscriptEntries`, `getThreadTranscriptEntries`, `getTranscript`, `mainEntries.some`, `surfaces.every`, `surfaces.push`, `this.tm.roster.emit`, `this.tm.sessions.activeSession.db.updateTranscriptEntry`, `updateEntry`.

SHA-256 do trecho: `68b7b8fa2d54c5ad7197ea02835dc60741a4bef7c60961de8977802ab6a10ad3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
