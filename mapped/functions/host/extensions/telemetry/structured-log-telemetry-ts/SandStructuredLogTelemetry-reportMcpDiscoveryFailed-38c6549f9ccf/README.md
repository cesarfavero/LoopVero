# `SandStructuredLogTelemetry.reportMcpDiscoveryFailed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473244-473254](../../../../../../../reference/runtime/host-main.cjs#L473244-L473254) | `method` | não | `failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473244-473254](../../../../../../../reference/runtime/host-main.cjs#L473244-L473254) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473244

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedErrorTag`, `logFields`, `this.enqueue`.

SHA-256 do trecho: `1ea8dbdc14d6922834da67f2be1b8a1980e3ef05b0f55cde46f51f9540cb73e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
