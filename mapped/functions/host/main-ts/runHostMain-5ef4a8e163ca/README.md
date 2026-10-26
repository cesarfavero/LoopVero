# `runHostMain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/main.ts` · [README do módulo](../../../../modules/host/main-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786937-787051](../../../../../reference/runtime/host-main.cjs#L786937-L787051) | `FunctionDeclaration` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786937-787051](../../../../../reference/runtime/host-main.cjs#L786937-L787051) | 5 | 0 | 8 | 0 | 0 | 2 |

### host:786937

Chamadas escritas diretamente neste corpo: `.write`, `Date.now`, `Promise.withResolvers`, `acquireHostLock`, `crashGuards.setReporter`, `createHostCrashMarkerStore`, `executeBoxCopyInFromEnv`, `fatalStartupCrashMarker`, `getSandRootDir`, `host.flushTelemetryForFatalExit`, `host.reportBoxReady`, `host.reportProcessCrash`, `host.start`, `host.telemetry.reportHostLog`, `hostLock.release`, `installInvariantReporter`, `installProcessCrashGuards`, `new SandHost`, `pinHostDiagnosticsReporter`, `process.argv.includes`, `process.exit`, `processOutput.print`, `readSandHostEnvironment`, `webAuthnProxyCredential.refresh`, `writeGatewayDiscovery`.

Alvos de atribuição ou incremento: `code`, `process.exitCode`, `stage`.

SHA-256 do trecho: `82ffa209dc224dd9bebb475cd61fe3c19d8a86fe77026e622b9984cbfd6fd5cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
