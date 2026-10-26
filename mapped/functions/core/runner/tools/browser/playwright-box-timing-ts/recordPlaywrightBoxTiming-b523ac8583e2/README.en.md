# `recordPlaywrightBoxTiming`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743165-743203](../../../../../../../../reference/runtime/host-main.cjs#L743165-L743203) | `FunctionDeclaration` | no | `ctx, timing, window2, call` |
| [evaluation:516016-516054](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516016-L516054) | `FunctionDeclaration` | no | `ctx, timing, window2, call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743165-743203](../../../../../../../../reference/runtime/host-main.cjs#L743165-L743203) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:516016-516054](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516016-L516054) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:743165

Calls written directly in this body: `.setAttributes`, `Math.max`, `Object.entries`, `getSpan2`, `playwrightBoxTimingBreakdown`, `recordComputerUseSpanAt`, `recordSettle`, `recordSteps`, `round`.

Assignment or increment targets: `attributes[computed]`.

SHA-256 of the source span: `30214fb5b0ecf227c1bab07a96f3a0f2074e786d15728abb4503a177d293d11d`.

### evaluation:516016

Calls written directly in this body: `.setAttributes`, `Math.max`, `Object.entries`, `getSpan2`, `playwrightBoxTimingBreakdown`, `recordComputerUseSpanAt`, `recordSettle`, `recordSteps`, `round`.

Assignment or increment targets: `attributes[computed]`.

SHA-256 of the source span: `30214fb5b0ecf227c1bab07a96f3a0f2074e786d15728abb4503a177d293d11d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
