# `compileCronMatcher`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682484-682489](../../../../../../reference/runtime/host-main.cjs#L682484-L682489) | `FunctionDeclaration` | não | `schedule` |
| [evaluation:526698-526703](../../../../../../reference/runtime/sand-eval-runner.cjs#L526698-L526703) | `FunctionDeclaration` | não | `schedule` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682484-682489](../../../../../../reference/runtime/host-main.cjs#L682484-L682489) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526698-526703](../../../../../../reference/runtime/sand-eval-runner.cjs#L526698-L526703) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:682484

Chamadas escritas diretamente neste corpo: `expandAlias`, `getZonedFormatter`, `parseCron`, `splitScheduleTimeZone`.

SHA-256 do trecho: `2c3d5aa2ff6fdddccdfb7c0686e59996ad387eb95b169e7776342203d772f8a1`.

### evaluation:526698

Chamadas escritas diretamente neste corpo: `expandAlias`, `getZonedFormatter`, `parseCron`, `splitScheduleTimeZone`.

SHA-256 do trecho: `2c3d5aa2ff6fdddccdfb7c0686e59996ad387eb95b169e7776342203d772f8a1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
