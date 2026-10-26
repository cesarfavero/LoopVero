# `ComputerOperationObservation.finish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776272-776315](../../../../../../../reference/runtime/host-main.cjs#L776272-L776315) | `method` | no | `(none)` |
| [evaluation:575926-575969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575926-L575969) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776272-776315](../../../../../../../reference/runtime/host-main.cjs#L776272-L776315) | 3 | 0 | 0 | 4 | 0 | 2 |
| [evaluation:575926-575969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575926-L575969) | 3 | 0 | 0 | 4 | 0 | 2 |

### host:776272

Calls written directly in this body: `Math.max`, `attempts.increment`, `combinedMode`, `getConversationId`, `getRequestId`, `this.clock.monotonicNow`, `this.options.reportComputerOperation`, `this.options.span.setAttributes`, `this.options.span.setOutcome`.

Assignment or increment targets: `metricRecorded`, `this.finished`.

SHA-256 of the source span: `2f2a53c8f29100e0fefebde0f9d1410f61dab2d5b2ed016c2c8a1734f2355f78`.

### evaluation:575926

Calls written directly in this body: `Math.max`, `attempts.increment`, `combinedMode`, `getConversationId`, `getRequestId`, `this.clock.monotonicNow`, `this.options.reportComputerOperation`, `this.options.span.setAttributes`, `this.options.span.setOutcome`.

Assignment or increment targets: `metricRecorded`, `this.finished`.

SHA-256 of the source span: `2f2a53c8f29100e0fefebde0f9d1410f61dab2d5b2ed016c2c8a1734f2355f78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
