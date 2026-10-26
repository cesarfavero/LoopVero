# `GroupChatGlue.readGroupHistory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738748-738752](../../../../../../../reference/runtime/host-main.cjs#L738748-L738752) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738748-738752](../../../../../../../reference/runtime/host-main.cjs#L738748-L738752) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:738748

Chamadas escritas diretamente neste corpo: `getTranscript`, `groupHistoryFromTranscriptEntries`, `session.db.getTranscriptEntries`.

SHA-256 do trecho: `dc68d02890f1de75afdb456a3a2d199e33dfdd072bbd316e96f4f96a4cc387d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
