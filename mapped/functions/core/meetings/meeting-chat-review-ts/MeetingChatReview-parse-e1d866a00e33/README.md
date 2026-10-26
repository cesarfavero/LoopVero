# `_MeetingChatReview.parse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760088-760096](../../../../../../reference/runtime/host-main.cjs#L760088-L760096) | `method` | não | `calls` |
| [evaluation:550903-550911](../../../../../../reference/runtime/sand-eval-runner.cjs#L550903-L550911) | `method` | não | `calls` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760088-760096](../../../../../../reference/runtime/host-main.cjs#L760088-L760096) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:550903-550911](../../../../../../reference/runtime/sand-eval-runner.cjs#L550903-L550911) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:760088

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.slice`, `meetingChatAnswerSchema.safeParse`.

SHA-256 do trecho: `baf906bd7165a608ad9873400ca113c909f9d4011485b817617bc15dab4a2edd`.

### evaluation:550903

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.slice`, `meetingChatAnswerSchema.safeParse`.

SHA-256 do trecho: `baf906bd7165a608ad9873400ca113c909f9d4011485b817617bc15dab4a2edd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
