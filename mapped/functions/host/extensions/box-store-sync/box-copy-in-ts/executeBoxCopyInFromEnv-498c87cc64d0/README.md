# `executeBoxCopyInFromEnv`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483269-483550](../../../../../../../reference/runtime/host-main.cjs#L483269-L483550) | `FunctionDeclaration` | sim | `env, createTelemetryClient` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483269-483550](../../../../../../../reference/runtime/host-main.cjs#L483269-L483550) | 9 | 1 | 6 | 5 | 0 | 1 |

### host:483269

Chamadas escritas diretamente neste corpo: `.catch`, `Date.now`, `acquireCopyInLock`, `buildCopyInStatusFromResult`, `copyInFailureOf`, `createDeadlinePolicy`, `createIdleWatchdogPolicy`, `createPollingPolicy2`, `createRetryPolicy`, `createSandDurableFileOwner`, `errorMessage`, `getAgentStoreRpcServiceOverride`, `getBoxStoreBackendPolicy`, `getSandRootDir`, `isBoxStoreCopyInEnabled`, `isBoxStorePackBuildEnabled`, `isLegacyBoxStoreHydrateSkipped`, `lock.release`, `log5`, `logFields`, `makeCopyInAccessTokenGetter`, `makeCopyInStatusWriter`, `new AgentStoreObjectStoreProvider`, `new BoxStoreSync`, `new SandSourceMap`, `new SandStructuredLogTelemetry`, `new Set`, `outcomeToExitCode`, `pinBoxStoreDiagnosticsReporter`, `readSandProcessEnvironment`, `reportCopyIn`, `resolveBoxObjectStoreProvider`, `resolveCopyInAttempts`, `resolveCopyInConcurrency`, `resolveCopyInDownloadOwner`, `resolveCopyInStoreId`, `resolveCopyInStuckThresholdMs`, `resolveSandBoxIdentityTags`, `result.failures.slice`, `runBoxCopyInWithRetry`, `shouldHydrateFromLegacyStore`, `stuckWatchdog.arm`, `stuckWatchdogHandle.dispose`, `telemetry.dispose`, `telemetry.reportBoxCopyIn`, `writeStatus`.

Alvos de atribuição ou incremento: `legacyFallbackReason`.

SHA-256 do trecho: `8c201c8c8d8e95b6ede34583d945884e9c55046f094eadd6c3d03adb8fa86e0a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
