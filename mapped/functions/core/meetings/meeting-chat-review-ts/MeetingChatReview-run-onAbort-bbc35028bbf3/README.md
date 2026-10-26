# `_MeetingChatReview.run/onAbort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760106-760106](../../../../../../reference/runtime/host-main.cjs#L760106-L760106) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:550921-550921](../../../../../../reference/runtime/sand-eval-runner.cjs#L550921-L550921) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760106-760106](../../../../../../reference/runtime/host-main.cjs#L760106-L760106) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:760106 usa retorno implícito de arrow function.
| [evaluation:550921-550921](../../../../../../reference/runtime/sand-eval-runner.cjs#L550921-L550921) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:550921 usa retorno implícito de arrow function.

### host:760106

Chamadas escritas diretamente neste corpo: `controller.abort`.

SHA-256 do trecho: `1470b8fe4e5582a3cc9f0ebb0327cac5a78fb75e35f6efb62ca0df9094af269e`.

### evaluation:550921

Chamadas escritas diretamente neste corpo: `controller.abort`.

SHA-256 do trecho: `1470b8fe4e5582a3cc9f0ebb0327cac5a78fb75e35f6efb62ca0df9094af269e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
