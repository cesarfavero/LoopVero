# `describeOneShotSchedule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682884-682899](../../../../../../reference/runtime/host-main.cjs#L682884-L682899) | `FunctionDeclaration` | não | `schedule` |
| [evaluation:527108-527123](../../../../../../reference/runtime/sand-eval-runner.cjs#L527108-L527123) | `FunctionDeclaration` | não | `schedule` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682884-682899](../../../../../../reference/runtime/host-main.cjs#L682884-L682899) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:527108-527123](../../../../../../reference/runtime/sand-eval-runner.cjs#L527108-L527123) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:682884

Chamadas escritas diretamente neste corpo: `.schedule.startsWith`, `compileCronMatcher`, `formatClock`, `isCalendarDate`, `normalizeSchedule`, `parseEveryIntervalMs`, `splitScheduleTimeZone`.

SHA-256 do trecho: `492eadf507d955d48473b430f43a7c1160701f0783d22967ab72def831497c18`.

### evaluation:527108

Chamadas escritas diretamente neste corpo: `.schedule.startsWith`, `compileCronMatcher`, `formatClock`, `isCalendarDate`, `normalizeSchedule`, `parseEveryIntervalMs`, `splitScheduleTimeZone`.

SHA-256 do trecho: `492eadf507d955d48473b430f43a7c1160701f0783d22967ab72def831497c18`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
