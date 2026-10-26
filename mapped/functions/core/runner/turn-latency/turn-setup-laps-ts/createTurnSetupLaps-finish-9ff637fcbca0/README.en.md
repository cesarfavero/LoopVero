# `createTurnSetupLaps/finish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-latency/turn-setup-laps.ts` · [Module README](../../../../../../modules/core/runner/turn-latency/turn-setup-laps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591245-591260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591245-L591260) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591245-591260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591245-L591260) | 1 | 1 | 0 | 1 | 0 | 1 |

### evaluation:591245

Calls written directly in this body: `errorLogTag`, `logger108.warn`, `setupLapMs.histogram`, `setupLapsTotalMs.histogram`, `timer2.finish`.

SHA-256 of the source span: `2196e58b4711e5294bcf01228630d3ddc790ef3756d7cfffb4fb274beb51646a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
