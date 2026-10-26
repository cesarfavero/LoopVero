# `createSandNavigationProbe/requestProbe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512765-512792](../../../../../../reference/runtime/sand-eval-runner.cjs#L512765-L512792) | `ArrowFunctionExpression` | no | `ctx, remoteAccessor, displayNumber, generation = reportGeneration` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512765-512792](../../../../../../reference/runtime/sand-eval-runner.cjs#L512765-L512792) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512765

Calls written directly in this body: `.catch`, `.finally`, `.then`, `delay2`, `now`, `runProbe`.

Assignment or increment targets: `inFlight`, `inFlightPromise`, `lastProbeAtMs`, `queuedDuringBaseline`, `trailingScheduled`.

SHA-256 of the source span: `a5919983cdd87e06758537bc0835e0f28717cd989b112e6ae454180bf943aaf4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
