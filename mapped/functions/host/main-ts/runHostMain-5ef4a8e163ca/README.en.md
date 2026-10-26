# `runHostMain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/main.ts` · [Module README](../../../../modules/host/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786937-787051](../../../../../reference/runtime/host-main.cjs#L786937-L787051) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786937-787051](../../../../../reference/runtime/host-main.cjs#L786937-L787051) | 5 | 0 | 8 | 0 | 0 | 2 |

### host:786937

Calls written directly in this body: `.write`, `Date.now`, `Promise.withResolvers`, `acquireHostLock`, `crashGuards.setReporter`, `createHostCrashMarkerStore`, `executeBoxCopyInFromEnv`, `fatalStartupCrashMarker`, `getSandRootDir`, `host.flushTelemetryForFatalExit`, `host.reportBoxReady`, `host.reportProcessCrash`, `host.start`, `host.telemetry.reportHostLog`, `hostLock.release`, `installInvariantReporter`, `installProcessCrashGuards`, `new SandHost`, `pinHostDiagnosticsReporter`, `process.argv.includes`, `process.exit`, `processOutput.print`, `readSandHostEnvironment`, `webAuthnProxyCredential.refresh`, `writeGatewayDiscovery`.

Assignment or increment targets: `code`, `process.exitCode`, `stage`.

SHA-256 of the source span: `82ffa209dc224dd9bebb475cd61fe3c19d8a86fe77026e622b9984cbfd6fd5cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
