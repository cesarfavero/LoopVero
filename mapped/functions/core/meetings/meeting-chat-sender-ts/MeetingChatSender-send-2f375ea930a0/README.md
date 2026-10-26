# `_MeetingChatSender.send`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-sender.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760356-760369](../../../../../../reference/runtime/host-main.cjs#L760356-L760369) | `method` | sim | `request5` |
| [evaluation:551171-551184](../../../../../../reference/runtime/sand-eval-runner.cjs#L551171-L551184) | `method` | sim | `request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760356-760369](../../../../../../reference/runtime/host-main.cjs#L760356-L760369) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:551171-551184](../../../../../../reference/runtime/sand-eval-runner.cjs#L551171-L551184) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:760356

Chamadas escritas diretamente neste corpo: `this.deps.meetings.recordChatSend`, `this.sendTraced`.

SHA-256 do trecho: `07ff38802769e87fac16480ebb611f4d9fdccda8027201689bc19cc30a51ea0d`.

### evaluation:551171

Chamadas escritas diretamente neste corpo: `this.deps.meetings.recordChatSend`, `this.sendTraced`.

SHA-256 do trecho: `d1932d1968d57d1bc69b0d5904bbadb5c17baf60023042fee10a3acc5820f343`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
