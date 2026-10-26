# `WidgetResponses.settlePendingLocalToolPermissionAsksOnSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782716-782737](../../../../../../../reference/runtime/host-main.cjs#L782716-L782737) | `method` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782716-782737](../../../../../../../reference/runtime/host-main.cjs#L782716-L782737) | 6 | 1 | 0 | 2 | 0 | 0 |

### host:782716

Chamadas escritas diretamente neste corpo: `session.db.getTranscriptEntries`, `session.db.updateTranscriptEntry`, `settlePendingLocalToolPermissionEntry`, `this.tm.roster.emit`, `this.tm.sessions.liveSessions.get`, `unlessRequestId`, `updateEntry`.

Alvos de atribuição ou incremento: `retired`.

SHA-256 do trecho: `687091849ff3a1ef80bfc347c7bdc8ffe92ed01647a29eb3963c7b8faa438ebe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
