# `_MeetingsTools.update`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773259-773333](../../../../../../reference/runtime/host-main.cjs#L773259-L773333) | `method` | sim | `deps, args` |
| [evaluation:572485-572559](../../../../../../reference/runtime/sand-eval-runner.cjs#L572485-L572559) | `method` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773259-773333](../../../../../../reference/runtime/host-main.cjs#L773259-L773333) | 19 | 0 | 5 | 6 | 2 | 0 |
| [evaluation:572485-572559](../../../../../../reference/runtime/sand-eval-runner.cjs#L572485-L572559) | 19 | 0 | 5 | 6 | 2 | 0 |

### host:773259

Chamadas escritas diretamente neste corpo: `Date.now`, `MeetingJoinRefusals.from`, `MeetingSites.parse`, `_MeetingsTools.acknowledgedLine`, `_MeetingsTools.answeredNote`, `_MeetingsTools.askConsent`, `_MeetingsTools.renderRow`, `_MeetingsTools.reviewInstruction`, `_MeetingsTools.reviewJoin`, `_MeetingsTools.scheduleOf`, `_MeetingsTools.scheduleReviewOf`, `_MeetingsTools.unknownMeeting`, `deps.meetings.readMeetingUrl`, `deps.meetings.recordJoinRefused`, `deps.meetings.updateMeeting`, `new SandMeetingsError`, `refuse2`.

Alvos de atribuição ou incremento: `joinAnswered`, `move2`.

Alvos de lançamento explícito: `SandMeetingsError`.

SHA-256 do trecho: `213a9cdb9f8547c75886f97d0a9c7239078a66fbe22a0360c7155533020a23dd`.

### evaluation:572485

Chamadas escritas diretamente neste corpo: `Date.now`, `MeetingJoinRefusals.from`, `MeetingSites.parse`, `_MeetingsTools.acknowledgedLine`, `_MeetingsTools.answeredNote`, `_MeetingsTools.askConsent`, `_MeetingsTools.renderRow`, `_MeetingsTools.reviewInstruction`, `_MeetingsTools.reviewJoin`, `_MeetingsTools.scheduleOf`, `_MeetingsTools.scheduleReviewOf`, `_MeetingsTools.unknownMeeting`, `deps.meetings.readMeetingUrl`, `deps.meetings.recordJoinRefused`, `deps.meetings.updateMeeting`, `new SandMeetingsError`, `refuse3`.

Alvos de atribuição ou incremento: `joinAnswered`, `move2`.

Alvos de lançamento explícito: `SandMeetingsError`.

SHA-256 do trecho: `b4d30b834ef19de4dfeea773c51119d27144e3b40b68d356002a301d49d8e470`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
