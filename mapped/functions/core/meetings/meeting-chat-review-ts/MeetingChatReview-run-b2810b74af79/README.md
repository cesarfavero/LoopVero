# `_MeetingChatReview.run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760097-760122](../../../../../../reference/runtime/host-main.cjs#L760097-L760122) | `method` | sim | `{     input: input2,     run,     signal,     timeoutMs = MEETING_CHAT_REVIEW_TIMEOUT_MS   }` |
| [evaluation:550912-550937](../../../../../../reference/runtime/sand-eval-runner.cjs#L550912-L550937) | `method` | sim | `{     input: input2,     run,     signal,     timeoutMs = MEETING_CHAT_REVIEW_TIMEOUT_MS   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760097-760122](../../../../../../reference/runtime/host-main.cjs#L760097-L760122) | 4 | 0 | 1 | 5 | 0 | 1 |
| [evaluation:550912-550937](../../../../../../reference/runtime/sand-eval-runner.cjs#L550912-L550937) | 4 | 0 | 1 | 5 | 0 | 1 |

### host:760097

Chamadas escritas diretamente neste corpo: `_MeetingChatReview.parse`, `_MeetingChatReview.prompt`, `cancelled`, `controller.abort`, `new AbortController`, `run`, `signal.addEventListener`, `signal.removeEventListener`, `withTimeout`.

SHA-256 do trecho: `a0ce018a93dc7080a6202af73139bbbdfced536b4e6ae2c649440f5ee9d18ede`.

### evaluation:550912

Chamadas escritas diretamente neste corpo: `_MeetingChatReview.parse`, `_MeetingChatReview.prompt`, `cancelled`, `controller.abort`, `new AbortController`, `run`, `signal.addEventListener`, `signal.removeEventListener`, `withTimeout`.

SHA-256 do trecho: `f8bf3f3bdc328b86d677689c5bd244dee6708cdfb02c6f1726fc297c57172a7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
