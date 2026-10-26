# `createErrorFreeStepTracker/beginRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/error-free-step/error-free-step.ts` · [Module README](../../../../../../modules/core/runner/error-free-step/error-free-step-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589024-589024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589024-L589024) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:589061-589085](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589061-L589085) | `FunctionExpression` | no | `options2, startedAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589024-589024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589024-L589024) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:589024 uses an implicit arrow-function return.
| [evaluation:589061-589085](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589061-L589085) | 9 | 0 | 0 | 7 | 0 | 0 |

### evaluation:589024

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `76e70ee5c429e2820c577a38fa63f40bbfd56d5ccc059c5380283a209505affd`.

### evaluation:589061

Calls written directly in this body: `Math.max`, `bindRun`, `clock.schedule`, `emit`, `step.key`, `step.opening`.

Assignment or increment targets: `pending`, `turn.timer`.

SHA-256 of the source span: `c561733863b97193bc9164b777d20ded9586788bb039a00e93a5bb20cf176709`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
