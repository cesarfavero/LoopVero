# `_MeetingChatSender.review`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-sender.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760421-760450](../../../../../../reference/runtime/host-main.cjs#L760421-L760450) | `method` | sim | `input2, signal, trace2` |
| [evaluation:551236-551265](../../../../../../reference/runtime/sand-eval-runner.cjs#L551236-L551265) | `method` | sim | `input2, signal, trace2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760421-760450](../../../../../../reference/runtime/host-main.cjs#L760421-L760450) | 7 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:551236-551265](../../../../../../reference/runtime/sand-eval-runner.cjs#L551236-L551265) | 7 | 0 | 2 | 1 | 0 | 0 |

### host:760421

Chamadas escritas diretamente neste corpo: `Date.now`, `MeetingChatReview.run`, `MeetingChatReviewJev.run`, `this.deps.meetings.recordChatReview`, `this.deps.reviewed`.

Alvos de atribuição ou incremento: `trace2.review`, `verdict`.

SHA-256 do trecho: `4ac8df7dce43875cb9f0ec35994de04f454a9c3d564124889a2eef2cde4ff3a1`.

### evaluation:551236

Chamadas escritas diretamente neste corpo: `Date.now`, `MeetingChatReview.run`, `MeetingChatReviewJev.run`, `this.deps.meetings.recordChatReview`, `this.deps.reviewed`.

Alvos de atribuição ou incremento: `trace2.review`, `verdict`.

SHA-256 do trecho: `19cec07808c280f06e101fd92734acc38fc65d480ad71cc14be213d632747b19`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
