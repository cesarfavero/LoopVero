# `parseCronField`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682303-682331](../../../../../../reference/runtime/host-main.cjs#L682303-L682331) | `FunctionDeclaration` | não | `field, min, max` |
| [evaluation:526517-526545](../../../../../../reference/runtime/sand-eval-runner.cjs#L526517-L526545) | `FunctionDeclaration` | não | `field, min, max` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682303-682331](../../../../../../reference/runtime/host-main.cjs#L682303-L682331) | 9 | 2 | 0 | 5 | 0 | 0 |
| [evaluation:526517-526545](../../../../../../reference/runtime/sand-eval-runner.cjs#L526517-L526545) | 9 | 2 | 0 | 5 | 0 | 0 |

### host:682303

Chamadas escritas diretamente neste corpo: `Number`, `Number.isInteger`, `field.split`, `new Set`, `part.split`, `rangePart.includes`, `rangePart.split`, `values.add`.

Alvos de atribuição ou incremento: `rangeEnd`, `rangeStart`, `value`.

SHA-256 do trecho: `c341b38aa14f17a545b81f110c5810853d4ae57058c8b857260791368b93af2b`.

### evaluation:526517

Chamadas escritas diretamente neste corpo: `Number`, `Number.isInteger`, `field.split`, `new Set`, `part.split`, `rangePart.includes`, `rangePart.split`, `values.add`.

Alvos de atribuição ou incremento: `rangeEnd`, `rangeStart`, `value`.

SHA-256 do trecho: `c341b38aa14f17a545b81f110c5810853d4ae57058c8b857260791368b93af2b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
