# `_SandEvalContinuationRuntime.nextWake`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628793-628837](../../../../../reference/runtime/sand-eval-runner.cjs#L628793-L628837) | `method` | yes | `status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628793-628837](../../../../../reference/runtime/sand-eval-runner.cjs#L628793-L628837) | 6 | 1 | 1 | 3 | 1 | 1 |

### evaluation:628793

Calls written directly in this body: `.toISOString`, `Date.parse`, `globalThis.crypto.randomUUID`, `isPastHorizonRejection`, `landFireOnNextEvent`, `new Date`, `this.control.advance`, `this.store.beginRun`, `this.store.get`, `this.store.list`, `this.store.recordRunDefinition`.

Assignment or increment targets: `advanced`, `selected`, `this.currentScenarioMs`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `ed8f72493ec2a0c40b1ce3506cf5b93809d88c3cb9e3f9fff52a75958ff08ed8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
