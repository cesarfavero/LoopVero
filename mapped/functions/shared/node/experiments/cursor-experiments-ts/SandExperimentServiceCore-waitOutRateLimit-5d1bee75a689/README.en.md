# `SandExperimentServiceCore.waitOutRateLimit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553274-553284](../../../../../../../reference/runtime/host-main.cjs#L553274-L553284) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553274-553284](../../../../../../../reference/runtime/host-main.cjs#L553274-L553284) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:553274

Calls written directly in this body: `Math.max`, `new Promise`, `this.clock.now`.

Assignment or increment targets: `this.releaseRateLimitWait`.

SHA-256 of the source span: `f800730c9faa390e614ca802896908744b42984c7d112d556c5423b700dc9364`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
