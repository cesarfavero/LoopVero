# `ComputerOperationObservation.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776207-776212](../../../../../../../reference/runtime/host-main.cjs#L776207-L776212) | `method` | no | `options2` |
| [evaluation:575861-575866](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575861-L575866) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776207-776212](../../../../../../../reference/runtime/host-main.cjs#L776207-L776212) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575861-575866](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575861-L575866) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:776207

Calls written directly in this body: `this.clock.monotonicNow`.

Assignment or increment targets: `this.attemptId`, `this.clock`, `this.options`, `this.startedAt`.

SHA-256 of the source span: `1390edebdacc281520ef507b1e9d0d5b93a262e9f63aba47e52a1857c4337c4c`.

### evaluation:575861

Calls written directly in this body: `this.clock.monotonicNow`.

Assignment or increment targets: `this.attemptId`, `this.clock`, `this.options`, `this.startedAt`.

SHA-256 of the source span: `6d04ac89b893155511dcf1598bb26bebc9aded6cd7a0748009033cd35b919379`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
