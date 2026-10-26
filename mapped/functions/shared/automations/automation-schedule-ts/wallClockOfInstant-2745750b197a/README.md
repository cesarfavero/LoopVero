# `wallClockOfInstant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682490-682494](../../../../../../reference/runtime/host-main.cjs#L682490-L682494) | `FunctionDeclaration` | não | `ms2, timeZone` |
| [evaluation:526704-526708](../../../../../../reference/runtime/sand-eval-runner.cjs#L526704-L526708) | `FunctionDeclaration` | não | `ms2, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682490-682494](../../../../../../reference/runtime/host-main.cjs#L682490-L682494) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526704-526708](../../../../../../reference/runtime/sand-eval-runner.cjs#L526704-L526708) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:682490

Chamadas escritas diretamente neste corpo: `boxLocalWallClock`, `getZonedFormatter`, `new Date`, `zonedWallClock`.

SHA-256 do trecho: `987b85c5ca08be1006b5ca492a13078f8fd41c3ed2ab365f7b7702ef64fda41e`.

### evaluation:526704

Chamadas escritas diretamente neste corpo: `boxLocalWallClock`, `getZonedFormatter`, `new Date`, `zonedWallClock`.

SHA-256 do trecho: `987b85c5ca08be1006b5ca492a13078f8fd41c3ed2ab365f7b7702ef64fda41e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
