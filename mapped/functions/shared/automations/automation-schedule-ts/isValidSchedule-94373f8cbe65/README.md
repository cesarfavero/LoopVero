# `isValidSchedule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682522-682530](../../../../../../reference/runtime/host-main.cjs#L682522-L682530) | `FunctionDeclaration` | não | `schedule, minimumIntervalMs` |
| [evaluation:526746-526754](../../../../../../reference/runtime/sand-eval-runner.cjs#L526746-L526754) | `FunctionDeclaration` | não | `schedule, minimumIntervalMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682522-682530](../../../../../../reference/runtime/host-main.cjs#L682522-L682530) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526746-526754](../../../../../../reference/runtime/sand-eval-runner.cjs#L526746-L526754) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:682522

Chamadas escritas diretamente neste corpo: `compileCronMatcher`, `cronIntervalIsAtLeast`, `normalizeSchedule`, `parseEveryIntervalMs`.

SHA-256 do trecho: `81e9233d03f3f1035c0d88dd6388dfe0de8843b4f273ba291983840edc48d386`.

### evaluation:526746

Chamadas escritas diretamente neste corpo: `compileCronMatcher`, `cronIntervalIsAtLeast`, `normalizeSchedule`, `parseEveryIntervalMs`.

SHA-256 do trecho: `81e9233d03f3f1035c0d88dd6388dfe0de8843b4f273ba291983840edc48d386`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
