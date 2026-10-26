# `_MeetingsTools.reviewAndJoin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773197-773243](../../../../../../reference/runtime/host-main.cjs#L773197-L773243) | `method` | sim | `deps, { args, schedule, cardAnswered }` |
| [evaluation:572423-572469](../../../../../../reference/runtime/sand-eval-runner.cjs#L572423-L572469) | `method` | sim | `deps, { args, schedule, cardAnswered }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773197-773243](../../../../../../reference/runtime/host-main.cjs#L773197-L773243) | 8 | 0 | 4 | 4 | 1 | 1 |
| [evaluation:572423-572469](../../../../../../reference/runtime/sand-eval-runner.cjs#L572423-L572469) | 8 | 0 | 4 | 4 | 1 | 1 |

### host:773197

Chamadas escritas diretamente neste corpo: `_MeetingsTools.answeredNote`, `_MeetingsTools.joinNotApproved`, `_MeetingsTools.joinedText`, `_MeetingsTools.renderRow`, `_MeetingsTools.requireScheduleLead`, `_MeetingsTools.reviewAndJoin`, `_MeetingsTools.reviewJoin`, `_MeetingsTools.scheduleReviewOf`, `calendarCheckReason`, `deps.meetings.joinMeeting`, `deps.meetings.scheduleMeeting`.

Alvos de atribuição ou incremento: `row`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `1d9567d9b1ad6773d8afb3b38910cd4e7bcf37caed361dc5ed50cfacacf0cce3`.

### evaluation:572423

Chamadas escritas diretamente neste corpo: `_MeetingsTools.answeredNote`, `_MeetingsTools.joinNotApproved`, `_MeetingsTools.joinedText`, `_MeetingsTools.renderRow`, `_MeetingsTools.requireScheduleLead`, `_MeetingsTools.reviewAndJoin`, `_MeetingsTools.reviewJoin`, `_MeetingsTools.scheduleReviewOf`, `calendarCheckReason`, `deps.meetings.joinMeeting`, `deps.meetings.scheduleMeeting`.

Alvos de atribuição ou incremento: `row`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `ff642bc522205495e94c5dcf1de72279e2da585e32c9620a8ae5185585487caf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
