# `FixtureUserMachine.shellStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596356-596361](../../../../../../reference/runtime/sand-eval-runner.cjs#L596356-L596361) | `method` | no | `command, workingDirectory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596356-596361](../../../../../../reference/runtime/sand-eval-runner.cjs#L596356-L596361) | 1 | 0 | 0 | 1 | 1 | 0 |

### evaluation:596356

Calls written directly in this body: `new Error`, `this.assertReachable`, `this.replay`, `this.shellOutcome`, `unresponsiveMessage`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `535a2d87e702de03c3a0e76d790dac2966d03b8d950b6d420cb38676b7e61228`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
