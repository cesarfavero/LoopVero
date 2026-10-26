# `isRealCalendarDay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/mobile-read-calendar.ts` · [README do módulo](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759105-759111](../../../../../../reference/runtime/host-main.cjs#L759105-L759111) | `FunctionDeclaration` | não | `value` |
| [evaluation:549265-549271](../../../../../../reference/runtime/sand-eval-runner.cjs#L549265-L549271) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759105-759111](../../../../../../reference/runtime/host-main.cjs#L759105-L759111) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549265-549271](../../../../../../reference/runtime/sand-eval-runner.cjs#L549265-L549271) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:759105

Chamadas escritas diretamente neste corpo: `CALENDAR_DAY_PREFIX.exec`, `Date.UTC`, `Number`, `date6.getUTCDate`, `date6.getUTCMonth`, `new Date`.

SHA-256 do trecho: `c002f7eec85113d04d670b26b48b05170960d5b7f630ef13fa19ba1b7099a7c5`.

### evaluation:549265

Chamadas escritas diretamente neste corpo: `CALENDAR_DAY_PREFIX.exec`, `Date.UTC`, `Number`, `date6.getUTCDate`, `date6.getUTCMonth`, `new Date`.

SHA-256 do trecho: `c002f7eec85113d04d670b26b48b05170960d5b7f630ef13fa19ba1b7099a7c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
