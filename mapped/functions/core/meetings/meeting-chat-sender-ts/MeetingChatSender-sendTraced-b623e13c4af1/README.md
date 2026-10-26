# `_MeetingChatSender.sendTraced`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meeting-chat-sender.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760370-760420](../../../../../../reference/runtime/host-main.cjs#L760370-L760420) | `method` | sim | `{ meetingId, text: text3, signal, once: once2 }, trace2` |
| [evaluation:551185-551235](../../../../../../reference/runtime/sand-eval-runner.cjs#L551185-L551235) | `method` | sim | `{ meetingId, text: text3, signal, once: once2 }, trace2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760370-760420](../../../../../../reference/runtime/host-main.cjs#L760370-L760420) | 9 | 0 | 6 | 6 | 0 | 0 |
| [evaluation:551185-551235](../../../../../../reference/runtime/sand-eval-runner.cjs#L551185-L551235) | 9 | 0 | 6 | 6 | 0 | 0 |

### host:760370

Chamadas escritas diretamente neste corpo: `Date.now`, `_MeetingChatSender.notPosted`, `once2.seen`, `this.deps.mark`, `this.deps.meetings.readChatContext`, `this.deps.meetings.readMarkedInternal`, `this.notApproved`, `this.postOnce`, `this.refusal`, `this.review`.

Alvos de atribuição ou incremento: `trace2.markedInternal`, `trace2.outcome`.

SHA-256 do trecho: `37851255daaa4a783c0fa8a9704152da48ef719b9861d3d4c1d9b98d2bd5d683`.

### evaluation:551185

Chamadas escritas diretamente neste corpo: `Date.now`, `_MeetingChatSender.notPosted`, `once2.seen`, `this.deps.mark`, `this.deps.meetings.readChatContext`, `this.deps.meetings.readMarkedInternal`, `this.notApproved`, `this.postOnce`, `this.refusal`, `this.review`.

Alvos de atribuição ou incremento: `trace2.markedInternal`, `trace2.outcome`.

SHA-256 do trecho: `37851255daaa4a783c0fa8a9704152da48ef719b9861d3d4c1d9b98d2bd5d683`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
