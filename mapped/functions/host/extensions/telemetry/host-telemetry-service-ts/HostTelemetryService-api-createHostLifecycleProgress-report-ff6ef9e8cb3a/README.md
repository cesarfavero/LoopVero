# `HostTelemetryService.api/createHostLifecycleProgress/report`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732101-732101](../../../../../../../reference/runtime/host-main.cjs#L732101-L732101) | `ArrowFunctionExpression` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732101-732101](../../../../../../../reference/runtime/host-main.cjs#L732101-L732101) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:732101 usa retorno implícito de arrow function.

### host:732101

Chamadas escritas diretamente neste corpo: `this.logs.reportHostLifecycle`.

SHA-256 do trecho: `b79472fc374e65f536cd0195c2ae9120d94232c755810d19fb820cd5c63d9c0f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
