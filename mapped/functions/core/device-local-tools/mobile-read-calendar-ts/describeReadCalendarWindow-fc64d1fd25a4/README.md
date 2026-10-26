# `describeReadCalendarWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/mobile-read-calendar.ts` · [README do módulo](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759155-759172](../../../../../../reference/runtime/host-main.cjs#L759155-L759172) | `FunctionDeclaration` | não | `{   from: from2,   to: to3 }` |
| [evaluation:549315-549332](../../../../../../reference/runtime/sand-eval-runner.cjs#L549315-L549332) | `FunctionDeclaration` | não | `{   from: from2,   to: to3 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759155-759172](../../../../../../reference/runtime/host-main.cjs#L759155-L759172) | 6 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:549315-549332](../../../../../../reference/runtime/sand-eval-runner.cjs#L549315-L549332) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:759155

Chamadas escritas diretamente neste corpo: `Math.min`, `calendarDayOf`, `dayOfMs`, `writtenClockAsUtcMs`.

SHA-256 do trecho: `4ee519caea05f49a675dd2c74ac9f3d27e71a0669d8726e29d27a3a1a9cf1962`.

### evaluation:549315

Chamadas escritas diretamente neste corpo: `Math.min`, `calendarDayOf`, `dayOfMs`, `writtenClockAsUtcMs`.

SHA-256 do trecho: `9727cae1fd6220177858be80801d211309d3598946f8a26112ab3c2a644cd00b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
