# `clampScheduleToMinimumInterval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682531-682579](../../../../../../reference/runtime/host-main.cjs#L682531-L682579) | `FunctionDeclaration` | não | `schedule, minimumIntervalMs` |
| [evaluation:526755-526803](../../../../../../reference/runtime/sand-eval-runner.cjs#L526755-L526803) | `FunctionDeclaration` | não | `schedule, minimumIntervalMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682531-682579](../../../../../../reference/runtime/host-main.cjs#L682531-L682579) | 20 | 2 | 0 | 11 | 0 | 0 |
| [evaluation:526755-526803](../../../../../../reference/runtime/sand-eval-runner.cjs#L526755-L526803) | 20 | 2 | 0 | 11 | 0 | 0 |

### host:682531

Chamadas escritas diretamente neste corpo: `.sort`, `.split`, `.trim`, `Number.isSafeInteger`, `String`, `calendarFields.join`, `commentedExpression.indexOf`, `commentedExpression.slice`, `cronIntervalIsAtLeast`, `expandAlias`, `fields3.join`, `fields3.slice`, `getZonedFormatter`, `isValidSchedule`, `new Set`, `normalizeSchedule`, `normalized.startsWith`, `parseCron`, `parseCronField`, `parseEveryIntervalMs`, `selected.join`, `selected.pop`, `selected.push`, `splitScheduleTimeZone`.

Alvos de atribuição ou incremento: `fields3[computed]`.

SHA-256 do trecho: `27119174bb24e05cb71fab23554b9419a564d09a97b8a256ea514d1f1dd1815c`.

### evaluation:526755

Chamadas escritas diretamente neste corpo: `.sort`, `.split`, `.trim`, `Number.isSafeInteger`, `String`, `calendarFields.join`, `commentedExpression.indexOf`, `commentedExpression.slice`, `cronIntervalIsAtLeast`, `expandAlias`, `fields3.join`, `fields3.slice`, `getZonedFormatter`, `isValidSchedule`, `new Set`, `normalizeSchedule`, `normalized.startsWith`, `parseCron`, `parseCronField`, `parseEveryIntervalMs`, `selected.join`, `selected.pop`, `selected.push`, `splitScheduleTimeZone`.

Alvos de atribuição ou incremento: `fields3[computed]`.

SHA-256 do trecho: `f571154182453d9bfb3a7b4c80639b72b100d4175f5b686516ffbbc7a687849c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
