# `SandTurnTelemetryImpl.finalize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473863-473897](../../../../../../../reference/runtime/host-main.cjs#L473863-L473897) | `method` | no | `outcome, error64, detail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473863-473897](../../../../../../../reference/runtime/host-main.cjs#L473863-L473897) | 8 | 0 | 0 | 1 | 0 | 0 |

### host:473863

Calls written directly in this body: `Date.now`, `Math.round`, `adjustTurnOutcomeForBotBlock`, `brandLiteralEnum`, `consumeTurnBotBlock`, `errorDetailTags`, `eventLogFields`, `logFields`, `sandErrorTags`, `this.baseTags`, `this.emitStart`, `this.onFinalized`, `this.telemetry.emitTurnEvent`.

Assignment or increment targets: `this.finalized`.

SHA-256 of the source span: `6f2f5c05e03a0e0f750f8edde4490fd64a9ab6c628c1c71bb7038dd949a4e7a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
