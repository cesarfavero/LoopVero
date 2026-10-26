# `HostTelemetryService.dispose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732184-732209](../../../../../../../reference/runtime/host-main.cjs#L732184-L732209) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732184-732209](../../../../../../../reference/runtime/host-main.cjs#L732184-L732209) | 0 | 0 | 7 | 0 | 0 | 0 |

### host:732184

Chamadas escritas diretamente neste corpo: `boxLogShipper.checkpointOffsets`, `boxLogShipper.dispose`, `boxLogShipper.stopPolling`, `this.analytics.dispose`, `this.desktopHealthPolling.dispose`, `this.egressIpPolling.dispose`, `this.eventLoop.dispose`, `this.hostCrashMarkerForwarding.dispose`, `this.logs.dispose`, `this.logs.setFlushTickListener`, `this.metrics.dispose`, `this.pressureProfiler.dispose`, `this.restoreConsole`, `this.tracing.dispose`, `this.unsubscribeEvents`.

Alvos de atribuição ou incremento: `this.boxLogShipper`, `this.desktopHealthPolling`, `this.egressIpPolling`, `this.eventLoop`, `this.hostCrashMarkerForwarding`, `this.pressureProfiler`, `this.restoreConsole`, `this.unsubscribeEvents`.

SHA-256 do trecho: `73e14b71b06e157c34507fbbc40b7184e36224700c0c097a20680285defecf69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
