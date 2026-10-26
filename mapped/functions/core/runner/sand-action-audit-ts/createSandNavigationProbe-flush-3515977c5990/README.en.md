# `createSandNavigationProbe/flush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512799-512822](../../../../../../reference/runtime/sand-eval-runner.cjs#L512799-L512822) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512799-512822](../../../../../../reference/runtime/sand-eval-runner.cjs#L512799-L512822) | 3 | 0 | 3 | 1 | 0 | 0 |

### evaluation:512799

Calls written directly in this body: `.finally`, `.map`, `Promise.all`, `now`, `probeTargetsByDisplay.entries`.

Assignment or increment targets: `inFlight`, `inFlightPromise`, `lastProbeAtMs`.

SHA-256 of the source span: `e700cfe40bf6cd915399ef0fe37382536e7a747d9af6e1b944da3771edbdcf56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
