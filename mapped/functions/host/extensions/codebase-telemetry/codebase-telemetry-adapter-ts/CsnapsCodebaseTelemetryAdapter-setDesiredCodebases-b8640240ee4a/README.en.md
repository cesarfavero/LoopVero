# `_CsnapsCodebaseTelemetryAdapter.setDesiredCodebases`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540655-540669](../../../../../../../reference/runtime/host-main.cjs#L540655-L540669) | `method` | yes | `codebases` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540655-540669](../../../../../../../reference/runtime/host-main.cjs#L540655-L540669) | 3 | 0 | 1 | 2 | 1 | 0 |

### host:540655

Calls written directly in this body: `new CsnapsAdapterError`, `this.csnaps.applyCodebaseSpecs`, `this.publishState`, `this.uploadPollingPolicy.start`.

Assignment or increment targets: `this.nextStateRequestSequence`, `this.uploadPolling`.

Explicit throw targets: `CsnapsAdapterError`.

SHA-256 of the source span: `b14b0ecd51f727e9f2e8b329ada0068993b10744c8b0a1bbe1eac676e93b71db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
