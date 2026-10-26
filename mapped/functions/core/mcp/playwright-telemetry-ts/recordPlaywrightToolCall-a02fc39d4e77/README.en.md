# `recordPlaywrightToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700508-700596](../../../../../../reference/runtime/host-main.cjs#L700508-L700596) | `FunctionDeclaration` | no | `ctx, args` |
| [evaluation:514300-514388](../../../../../../reference/runtime/sand-eval-runner.cjs#L514300-L514388) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700508-700596](../../../../../../reference/runtime/host-main.cjs#L700508-L700596) | 10 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:514300-514388](../../../../../../reference/runtime/sand-eval-runner.cjs#L514300-L514388) | 10 | 1 | 0 | 0 | 0 | 0 |

### host:700508

Calls written directly in this body: `Math.round`, `String`, `brandLiteralEnum`, `brandedId`, `durationExReviewAtMostDuration`, `logger112.warn`, `metric.histogram`, `readSandAgentLoopModel`, `recordSleeps`, `runCodeErrorClassLabel`, `snapshotSkipped`, `snapshotSkips.increment`, `toolCallErrorClassLabel`, `toolLabel`.

SHA-256 of the source span: `ecdcd6853dbf0f5edef2a74b5890fc7e472a9231ae2e76ae50b3e1c23a5da27e`.

### evaluation:514300

Calls written directly in this body: `Math.round`, `String`, `brandLiteralEnum`, `brandedId`, `durationExReviewAtMostDuration`, `logger90.warn`, `metric.histogram`, `readSandAgentLoopModel`, `recordSleeps`, `runCodeErrorClassLabel`, `snapshotSkipped`, `snapshotSkips.increment`, `toolCallErrorClassLabel`, `toolLabel`.

SHA-256 of the source span: `fd4dc8a1c58d39f3cf47746d43b00b987757a5ef92dd32e31fe8a6c96d649214`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
