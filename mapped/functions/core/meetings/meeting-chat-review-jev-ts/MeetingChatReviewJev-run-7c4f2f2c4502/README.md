# `_MeetingChatReviewJev.run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-review-jev.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760268-760317](../../../../../../reference/runtime/host-main.cjs#L760268-L760317) | `method` | sim | `{     input: input2,     meetings,     signal,     now = Date.now   }` |
| [evaluation:551083-551132](../../../../../../reference/runtime/sand-eval-runner.cjs#L551083-L551132) | `method` | sim | `{     input: input2,     meetings,     signal,     now = Date.now   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760268-760317](../../../../../../reference/runtime/host-main.cjs#L760268-L760317) | 3 | 0 | 1 | 5 | 0 | 2 |
| [evaluation:551083-551132](../../../../../../reference/runtime/sand-eval-runner.cjs#L551083-L551132) | 3 | 0 | 1 | 5 | 0 | 2 |

### host:760268

Chamadas escritas diretamente neste corpo: `_MeetingChatReviewJev.decide`, `_MeetingChatReviewJev.settings`, `_MeetingChatReviewJev.state`, `ask`, `controller.abort`, `meetings.askChatReviewJev.bind`, `meetings.readChatReviewJevConfig`, `new AbortController`, `now`, `signal.addEventListener`, `signal.removeEventListener`, `skipped2`, `withTimeout`.

Alvos de atribuição ou incremento: `settings`.

SHA-256 do trecho: `f35a76c5d4082a5b1781fb44876346b2943c0cef4c50ef63894660be3de37709`.

### evaluation:551083

Chamadas escritas diretamente neste corpo: `_MeetingChatReviewJev.decide`, `_MeetingChatReviewJev.settings`, `_MeetingChatReviewJev.state`, `ask`, `controller.abort`, `meetings.askChatReviewJev.bind`, `meetings.readChatReviewJevConfig`, `new AbortController`, `now`, `signal.addEventListener`, `signal.removeEventListener`, `skipped`, `withTimeout`.

Alvos de atribuição ou incremento: `settings`.

SHA-256 do trecho: `8c8df45fd6fe14751fe003dd9170b461b84076e350fc20195cdc9e6815c8bcd1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
