# `GrokBotMetricsBackend.getOrCreateClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/grok-bot-metrics-backend.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/grok-bot-metrics-backend-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730190-730198](../../../../../../../reference/runtime/host-main.cjs#L730190-L730198) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730190-730198](../../../../../../../reference/runtime/host-main.cjs#L730190-L730198) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:730190

Calls written directly in this body: `createSandCursorBackendClient`, `this.options.createClient`.

Assignment or increment targets: `this.client`.

SHA-256 of the source span: `0244a93eb4d2a481961d4ded52ade1d4c320aa0b5f4716c9035aaad126652fcb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
