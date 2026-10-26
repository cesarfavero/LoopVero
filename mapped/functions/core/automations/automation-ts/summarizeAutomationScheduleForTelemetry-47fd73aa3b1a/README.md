# `summarizeAutomationScheduleForTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation.ts` · [README do módulo](../../../../../modules/core/automations/automation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715027-715070](../../../../../../reference/runtime/host-main.cjs#L715027-L715070) | `FunctionDeclaration` | não | `{   schedule,   timeZone,   startMs }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715027-715070](../../../../../../reference/runtime/host-main.cjs#L715027-L715070) | 6 | 1 | 0 | 2 | 0 | 0 |

### host:715027

Chamadas escritas diretamente neste corpo: `Math.floor`, `compileCronMatcher`, `nextCronRunAt`, `normalizeSchedule`, `parseEveryIntervalMs`, `wallClockOfInstant`.

Alvos de atribuição ou incremento: `countedFires`, `cursorMs`, `firesOnWeekend`, `firesOvernight`, `nextRunAt`.

SHA-256 do trecho: `844d1be507f9064ec6dc4b6a9dbe996d64cca2ea9dcd62be4aa732f9ac0180b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
