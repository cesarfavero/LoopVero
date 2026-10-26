# `englishCronDays`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682724-682769](../../../../../../reference/runtime/host-main.cjs#L682724-L682769) | `FunctionDeclaration` | não | `days` |
| [evaluation:526948-526993](../../../../../../reference/runtime/sand-eval-runner.cjs#L526948-L526993) | `FunctionDeclaration` | não | `days` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682724-682769](../../../../../../reference/runtime/host-main.cjs#L682724-L682769) | 9 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:526948-526993](../../../../../../reference/runtime/sand-eval-runner.cjs#L526948-L526993) | 9 | 0 | 0 | 9 | 0 | 0 |

### host:682724

Chamadas escritas diretamente neste corpo: `days.days.map`, `formatDayOfMonthOrdinal`, `invariant`, `joinWithAnd`.

SHA-256 do trecho: `946a2b09ec8c6f608024332f02b297f6651886b3aa380abebb37e2663b803092`.

### evaluation:526948

Chamadas escritas diretamente neste corpo: `days.days.map`, `formatDayOfMonthOrdinal`, `invariant`, `joinWithAnd`.

SHA-256 do trecho: `5f00999d1ee1c0f6b4efb6af78cc00e840c9df883ae0f895fa87f8ea123988cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
