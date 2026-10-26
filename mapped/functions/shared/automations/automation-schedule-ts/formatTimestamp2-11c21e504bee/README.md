# `formatTimestamp2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:526709-526718](../../../../../../reference/runtime/sand-eval-runner.cjs#L526709-L526718) | `FunctionDeclaration` | não | `ms2, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526709-526718](../../../../../../reference/runtime/sand-eval-runner.cjs#L526709-L526718) | 2 | 0 | 0 | 3 | 0 | 1 |

### evaluation:526709

Chamadas escritas diretamente neste corpo: `.toLocaleString`, `Number.isFinite`, `new Date`.

SHA-256 do trecho: `d261a5685633f56210498632ff529cd89f71a1f90e8e2942a24669c147511034`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
