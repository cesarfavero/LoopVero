# `SandSteerInbox.endRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/steer/turn-steer.ts` · [Module README](../../../../../../modules/core/runner/steer/turn-steer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589838-589842](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589838-L589842) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589838-589842](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589838-L589842) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:589838

Calls written directly in this body: `steer.settle`, `this.pending.splice`, `this.settlePoppedAsDelivered`.

Assignment or increment targets: `this.accepting`.

SHA-256 of the source span: `5cd831c8230f96167d412afe4c6ca448881fd290256e9b63b4d1d46a525464c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
