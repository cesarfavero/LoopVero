# `_MeetingScheduleCopy.reviewRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meetings-shared.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-shared-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772627-772669](../../../../../../reference/runtime/host-main.cjs#L772627-L772669) | `method` | não | `{     schedule,     scheduleId,     calendarEvent,     firstStartAtMs   }` |
| [evaluation:571853-571895](../../../../../../reference/runtime/sand-eval-runner.cjs#L571853-L571895) | `method` | não | `{     schedule,     scheduleId,     calendarEvent,     firstStartAtMs   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772627-772669](../../../../../../reference/runtime/host-main.cjs#L772627-L772669) | 8 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:571853-571895](../../../../../../reference/runtime/sand-eval-runner.cjs#L571853-L571895) | 8 | 0 | 0 | 4 | 0 | 0 |

### host:772627

Chamadas escritas diretamente neste corpo: `.toISOString`, `_MeetingScheduleCopy.repeatDescription`, `new Date`.

SHA-256 do trecho: `b9fed845322dc8aa99f937d3388078dc4a94226567285977c8890da43a1c550c`.

### evaluation:571853

Chamadas escritas diretamente neste corpo: `.toISOString`, `_MeetingScheduleCopy.repeatDescription`, `new Date`.

SHA-256 do trecho: `b9fed845322dc8aa99f937d3388078dc4a94226567285977c8890da43a1c550c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
