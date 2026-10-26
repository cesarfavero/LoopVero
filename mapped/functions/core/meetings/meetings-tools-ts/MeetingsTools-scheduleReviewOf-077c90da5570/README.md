# `_MeetingsTools.scheduleReviewOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773392-773400](../../../../../../reference/runtime/host-main.cjs#L773392-L773400) | `method` | não | `{ scheduleId, calendarEvent }, schedule, meetings` |
| [evaluation:572618-572626](../../../../../../reference/runtime/sand-eval-runner.cjs#L572618-L572626) | `method` | não | `{ scheduleId, calendarEvent }, schedule, meetings` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773392-773400](../../../../../../reference/runtime/host-main.cjs#L773392-L773400) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572618-572626](../../../../../../reference/runtime/sand-eval-runner.cjs#L572618-L572626) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:773392

Chamadas escritas diretamente neste corpo: `meetings.firstStartAtMs`.

SHA-256 do trecho: `356dfde4bc3a5d989fc2b87282e6c619018e8d2f0ba3a9d724304ba4420b69f1`.

### evaluation:572618

Chamadas escritas diretamente neste corpo: `meetings.firstStartAtMs`.

SHA-256 do trecho: `356dfde4bc3a5d989fc2b87282e6c619018e8d2f0ba3a9d724304ba4420b69f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
