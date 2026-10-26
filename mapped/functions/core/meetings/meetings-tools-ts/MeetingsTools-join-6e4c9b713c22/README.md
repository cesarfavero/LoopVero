# `_MeetingsTools.join`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773165-773196](../../../../../../reference/runtime/host-main.cjs#L773165-L773196) | `method` | sim | `deps, args` |
| [evaluation:572391-572422](../../../../../../reference/runtime/sand-eval-runner.cjs#L572391-L572422) | `method` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773165-773196](../../../../../../reference/runtime/host-main.cjs#L773165-L773196) | 8 | 0 | 4 | 4 | 1 | 0 |
| [evaluation:572391-572422](../../../../../../reference/runtime/sand-eval-runner.cjs#L572391-L572422) | 8 | 0 | 4 | 4 | 1 | 0 |

### host:773165

Chamadas escritas diretamente neste corpo: `MeetingLinkCopy.labelWithoutQuery`, `MeetingSites.parse`, `_MeetingsTools.acknowledgedLine`, `_MeetingsTools.answeredNote`, `_MeetingsTools.askConsent`, `_MeetingsTools.joinNotApproved`, `_MeetingsTools.requireScheduleLead`, `_MeetingsTools.reviewAndJoin`, `_MeetingsTools.reviewInstruction`, `_MeetingsTools.scheduleOf`, `deps.meetings.readJoinedMeeting`, `new SandMeetingsError`, `refuse2`.

Alvos de lançamento explícito: `SandMeetingsError`.

SHA-256 do trecho: `be160f682e0d77a412dc3f6220fd10f0c27d1c1c2e4dcd3c89ba915d0b88d9b9`.

### evaluation:572391

Chamadas escritas diretamente neste corpo: `MeetingLinkCopy.labelWithoutQuery`, `MeetingSites.parse`, `_MeetingsTools.acknowledgedLine`, `_MeetingsTools.answeredNote`, `_MeetingsTools.askConsent`, `_MeetingsTools.joinNotApproved`, `_MeetingsTools.requireScheduleLead`, `_MeetingsTools.reviewAndJoin`, `_MeetingsTools.reviewInstruction`, `_MeetingsTools.scheduleOf`, `deps.meetings.readJoinedMeeting`, `new SandMeetingsError`, `refuse3`.

Alvos de lançamento explícito: `SandMeetingsError`.

SHA-256 do trecho: `7f97e47d5057936dcc6323d2c6b6b898efa7267ec3c0f20860e6f34665087c5d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
