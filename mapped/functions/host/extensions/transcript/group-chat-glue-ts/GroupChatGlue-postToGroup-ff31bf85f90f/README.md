# `GroupChatGlue.postToGroup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/group-chat-glue.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738340-738342](../../../../../../../reference/runtime/host-main.cjs#L738340-L738342) | `method` | sim | `fromAgentId, groupId, text3, priority = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738340-738342](../../../../../../../reference/runtime/host-main.cjs#L738340-L738342) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:738340

Chamadas escritas diretamente neste corpo: `this.postToGroupWithStatus`.

SHA-256 do trecho: `11c705c7b5712ff5b9607646ef7190981734b25895dfcd0c7ad52cb9bb7a6ac3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
