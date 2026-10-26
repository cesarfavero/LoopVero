# `SandTurnTelemetryImpl.noteRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473847-473852](../../../../../../../reference/runtime/host-main.cjs#L473847-L473852) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473847-473852](../../../../../../../reference/runtime/host-main.cjs#L473847-L473852) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:473847

Chamadas escritas diretamente neste corpo: `sandErrorWireCode`.

Alvos de atribuição ou incremento: `this.backoffTotalMs`, `this.retryCause`, `this.retryCount`.

SHA-256 do trecho: `8a4309c9a6987a7e465567799a4403415d42250e2da09d6f04da342a215378e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
