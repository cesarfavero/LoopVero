# `_CsnapsCodebaseTelemetryAdapter.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540615-540644](../../../../../../../reference/runtime/host-main.cjs#L540615-L540644) | `method` | no | `{     csnaps,     authId,     initialState,     uploadPolling,     createUploadCredentials,     logger: logger132   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540615-540644](../../../../../../../reference/runtime/host-main.cjs#L540615-L540644) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:540615

Calls written directly in this body: `Promise.withResolvers`, `createWatchChannel`, `csnaps.terminalFailure.then`, `toAdapterState`.

Assignment or increment targets: `this.authId`, `this.createUploadCredentials`, `this.csnaps`, `this.logger`, `this.terminalFailure`, `this.uploadPollingPolicy`.

SHA-256 of the source span: `3c7bc71f19086e8634c95a04fb4f97ae2713d184305b19cd245ac2cb03c7d6d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
