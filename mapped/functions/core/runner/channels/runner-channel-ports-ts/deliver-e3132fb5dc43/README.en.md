# `deliver`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/channels/runner-channel-ports.ts` · [Module README](../../../../../../modules/core/runner/channels/runner-channel-ports-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534825-534829](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534825-L534829) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534825-534829](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534825-L534829) | 0 | 0 | 0 | 0 | 1 | 0 |

### evaluation:534825

Calls written directly in this body: `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `df74702de1b52abf2d352bbd9fe516085e9b20de8bbaad9bf9edeb84f3891121`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
