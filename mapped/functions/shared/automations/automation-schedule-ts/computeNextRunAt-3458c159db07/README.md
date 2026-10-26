# `computeNextRunAt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682580-682590](../../../../../../reference/runtime/host-main.cjs#L682580-L682590) | `FunctionDeclaration` | não | `schedule, afterMs, timeZone` |
| [evaluation:526804-526814](../../../../../../reference/runtime/sand-eval-runner.cjs#L526804-L526814) | `FunctionDeclaration` | não | `schedule, afterMs, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682580-682590](../../../../../../reference/runtime/host-main.cjs#L682580-L682590) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:526804-526814](../../../../../../reference/runtime/sand-eval-runner.cjs#L526804-L526814) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:682580

Chamadas escritas diretamente neste corpo: `Math.floor`, `compileCronMatcher`, `nextCronRunAt`, `normalizeSchedule`, `parseEverySchedule`.

SHA-256 do trecho: `cbefbe5013c1c9ce7101b48590c38860e410e25a22f941e8f8bd60884626ab93`.

### evaluation:526804

Chamadas escritas diretamente neste corpo: `Math.floor`, `compileCronMatcher`, `nextCronRunAt`, `normalizeSchedule`, `parseEverySchedule`.

SHA-256 do trecho: `cbefbe5013c1c9ce7101b48590c38860e410e25a22f941e8f8bd60884626ab93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
