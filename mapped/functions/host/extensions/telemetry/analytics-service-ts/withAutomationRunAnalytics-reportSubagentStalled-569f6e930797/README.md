# `withAutomationRunAnalytics/reportSubagentStalled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/analytics-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:730580-730580](../../../../../../../reference/runtime/host-main.cjs#L730580-L730580) | `ArrowFunctionExpression` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730580-730580](../../../../../../../reference/runtime/host-main.cjs#L730580-L730580) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:730580 usa retorno implícito de arrow function.

### host:730580

Chamadas escritas diretamente neste corpo: `telemetry.reportSubagentStalled`.

SHA-256 do trecho: `47c8b1a1495580da2bb943f26e349546271136b9b1e3d5dba31222ea3106ac4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
