# `HostTelemetryService.start/report`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732051-732065](../../../../../../../reference/runtime/host-main.cjs#L732051-L732065) | `ArrowFunctionExpression` | não | `summary, trigger2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732051-732065](../../../../../../../reference/runtime/host-main.cjs#L732051-L732065) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:732051

Chamadas escritas diretamente neste corpo: `this.logs.reportHostEventLoop`, `this.options.experiments.checkFeatureGate`, `this.pressureProfiler.onPressure`.

SHA-256 do trecho: `8f84b7b72bf4588c2a18850e98f30a6162021d7a7daf1c1cc7b06df3978205b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
