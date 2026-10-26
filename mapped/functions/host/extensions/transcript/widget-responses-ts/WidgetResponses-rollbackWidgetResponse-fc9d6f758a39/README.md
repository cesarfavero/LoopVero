# `WidgetResponses.rollbackWidgetResponse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783125-783134](../../../../../../../reference/runtime/host-main.cjs#L783125-L783134) | `method` | não | `entryId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783125-783134](../../../../../../../reference/runtime/host-main.cjs#L783125-L783134) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:783125

Chamadas escritas diretamente neste corpo: `this.tm.roster.emit`, `this.tm.sessions.activeSession.db.updateTranscriptEntry`, `updateEntry`.

SHA-256 do trecho: `02c0eed9e444b418e4ec366b861408793661a283ae030df7a70aa2fe91021a87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
