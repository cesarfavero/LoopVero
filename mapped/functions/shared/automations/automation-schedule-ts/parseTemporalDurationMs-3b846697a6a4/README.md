# `parseTemporalDurationMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682457-682469](../../../../../../reference/runtime/host-main.cjs#L682457-L682469) | `FunctionDeclaration` | não | `duration3, allowZero` |
| [evaluation:526671-526683](../../../../../../reference/runtime/sand-eval-runner.cjs#L526671-L526683) | `FunctionDeclaration` | não | `duration3, allowZero` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682457-682469](../../../../../../reference/runtime/host-main.cjs#L682457-L682469) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:526671-526683](../../../../../../reference/runtime/sand-eval-runner.cjs#L526671-L526683) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:682457

Chamadas escritas diretamente neste corpo: `Number`, `TEMPORAL_DURATION_PART.exec`, `part[computed].toLowerCase`.

Alvos de atribuição ou incremento: `TEMPORAL_DURATION_PART.lastIndex`, `consumed`, `part`, `totalMs`.

SHA-256 do trecho: `8b0ebe349e33a847e53da5dcd0b31fc1fbaaff2b86bf86997461da9f73c243f5`.

### evaluation:526671

Chamadas escritas diretamente neste corpo: `Number`, `TEMPORAL_DURATION_PART.exec`, `part[computed].toLowerCase`.

Alvos de atribuição ou incremento: `TEMPORAL_DURATION_PART.lastIndex`, `consumed`, `part`, `totalMs`.

SHA-256 do trecho: `8b0ebe349e33a847e53da5dcd0b31fc1fbaaff2b86bf86997461da9f73c243f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
