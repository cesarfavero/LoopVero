# `HostTelemetryService.api/flushTracing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732105-732105](../../../../../../../reference/runtime/host-main.cjs#L732105-L732105) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732105-732105](../../../../../../../reference/runtime/host-main.cjs#L732105-L732105) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:732105 usa retorno implícito de arrow function.

### host:732105

Chamadas escritas diretamente neste corpo: `this.tracing.flush`.

SHA-256 do trecho: `66a161f30fde825db83098405e411d12d1c7c101e671ea4aa29764326a2cd28e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
