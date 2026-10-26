# `HostTelemetryService.reportMetricsFlushError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732242-732247](../../../../../../../reference/runtime/host-main.cjs#L732242-L732247) | `method` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732242-732247](../../../../../../../reference/runtime/host-main.cjs#L732242-L732247) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:732242

Chamadas escritas diretamente neste corpo: `errorLogTag`, `this.logs.reportHostLog`, `this.reportedMetricsFlushErrorReasons.add`, `this.reportedMetricsFlushErrorReasons.has`.

SHA-256 do trecho: `2aa9146b9a428b2a85f1c94e7efa7e6e9b74d9e6ccc300a8236387e53a79d970`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
