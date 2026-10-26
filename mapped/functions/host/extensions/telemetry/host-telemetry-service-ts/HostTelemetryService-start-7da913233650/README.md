# `HostTelemetryService.start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732036-732090](../../../../../../../reference/runtime/host-main.cjs#L732036-L732090) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732036-732090](../../../../../../../reference/runtime/host-main.cjs#L732036-L732090) | 3 | 0 | 1 | 0 | 0 | 0 |

### host:732036

Chamadas escritas diretamente neste corpo: `createEventLoopTelemetry`, `createPressureCpuProfiler`, `processOutput.installConsoleForwarding`, `subscribeToCredentialRenewalTelemetry`, `this.adoptPersistedHttpProxyName`, `this.analytics.activate`, `this.analytics.markActive`, `this.logs.setFlushTickListener`, `this.options.desktopHealthPolling.start`, `this.options.egressIpPolling.start`.

Alvos de atribuição ou incremento: `this.boxLogShipper`, `this.desktopHealthPolling`, `this.egressIpPolling`, `this.eventLoop`, `this.pressureProfiler`, `this.restoreConsole`, `this.unsubscribeEvents`.

SHA-256 do trecho: `d9d5cc645130ab8549290c1b98fd9db6214a218c7d447bcb8e2743220a3bfcd4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
