# `createDraftCalendarInviteTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/calendar-invite/draft-calendar-invite-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/calendar-invite/draft-calendar-invite-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764046-764101](../../../../../../../../reference/runtime/host-main.cjs#L764046-L764101) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:557420-557475](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557420-L557475) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764046-764101](../../../../../../../../reference/runtime/host-main.cjs#L764046-L764101) | 9 | 0 | 3 | 2 | 1 | 0 |
| [evaluation:557420-557475](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557420-L557475) | 9 | 0 | 3 | 2 | 1 | 0 |

### host:764046

Chamadas escritas diretamente neste corpo: `Date.now`, `args.guests.map`, `d.calendarDay.read`, `d.emitCard`, `d.ownerName`, `d.timeZone`, `dayEventsOf`, `dayNoteOf`, `inviteTimesOf`, `inviteWhenLabel`, `localDayOf`, `new SandToolInputError`, `resolveCardTaskThread`, `surfaceDisplayName`, `timeZoneOrUtc`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `1406da0f69dec5432338444559c9fd8c495c6ebb69598b8ee47555d484ba8cb5`.

### evaluation:557420

Chamadas escritas diretamente neste corpo: `Date.now`, `args.guests.map`, `d.calendarDay.read`, `d.emitCard`, `d.ownerName`, `d.timeZone`, `dayEventsOf`, `dayNoteOf`, `inviteTimesOf`, `inviteWhenLabel`, `localDayOf`, `new SandToolInputError`, `resolveCardTaskThread`, `surfaceDisplayName`, `timeZoneOrUtc`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `3a68d8c8d1fe347a4e46e633d29251e17b2232b79ce4d5246598aaeb15d1fd13`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
