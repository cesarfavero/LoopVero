# `_MeetingsTools.renderListLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773497-773514](../../../../../../reference/runtime/host-main.cjs#L773497-L773514) | `method` | não | `row, nowMs2, externalMeetingId` |
| [evaluation:572723-572740](../../../../../../reference/runtime/sand-eval-runner.cjs#L572723-L572740) | `method` | não | `row, nowMs, externalMeetingId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773497-773514](../../../../../../reference/runtime/host-main.cjs#L773497-L773514) | 8 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572723-572740](../../../../../../reference/runtime/sand-eval-runner.cjs#L572723-L572740) | 8 | 0 | 0 | 1 | 0 | 0 |

### host:773497

Chamadas escritas diretamente neste corpo: `MeetingScheduleCopy.repeatDescription`, `_MeetingsTools.formatTime`, `_MeetingsTools.joiningIn`, `_MeetingsTools.requestedLabel`, `_MeetingsTools.titleSuffix`, `joiningIn.toLowerCase`, `parts.join`, `parts.push`.

SHA-256 do trecho: `92560c3daab932dc5ed9a62bcdab9de26061d903c9e897dfddc6f40beeb305cf`.

### evaluation:572723

Chamadas escritas diretamente neste corpo: `MeetingScheduleCopy.repeatDescription`, `_MeetingsTools.formatTime`, `_MeetingsTools.joiningIn`, `_MeetingsTools.requestedLabel`, `_MeetingsTools.titleSuffix`, `joiningIn.toLowerCase`, `parts.join`, `parts.push`.

SHA-256 do trecho: `ff7bbc179074c0a21d5338caf88b2dfc702952d48a44c21ac1d0cdb0fb53c05e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
