# `_CsnapsCodebaseTelemetryAdapter.create`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540533-540614](../../../../../../../reference/runtime/host-main.cjs#L540533-L540614) | `method` | yes | `{     credentials,     paths,     backendUrl,     csnapsBinPath,     spawnCsnaps: spawnCsnaps2,     uploadPolling,     createUploadCredentials,     logger: logger132,     signal   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540533-540614](../../../../../../../reference/runtime/host-main.cjs#L540533-L540614) | 0 | 0 | 2 | 1 | 2 | 2 |

### host:540533

Calls written directly in this body: `createDeadlinePolicy`, `csnaps.close`, `new CodebaseTelemetryCleanupError`, `new _CsnapsCodebaseTelemetryAdapter`, `spawnCsnaps2`.

Explicit throw targets: `CodebaseTelemetryCleanupError`, `error64`.

SHA-256 of the source span: `dc9a6c95768e20783a076016ca6164ddb1292e74d53395402cac63820b4b34e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
