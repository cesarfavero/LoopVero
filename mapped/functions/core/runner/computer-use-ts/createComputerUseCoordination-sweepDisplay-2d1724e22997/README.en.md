# `createComputerUseCoordination/sweepDisplay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525334-525350](../../../../../../reference/runtime/sand-eval-runner.cjs#L525334-L525350) | `ArrowFunctionExpression` | yes | `ctx, connection, display` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525334-525350](../../../../../../reference/runtime/sand-eval-runner.cjs#L525334-L525350) | 1 | 0 | 2 | 0 | 0 | 0 |

### evaluation:525334

Calls written directly in this body: `.execute`, `String`, `buildHostShellArgs`, `connection.remoteAccessor.get`, `deps.resolveBoxId`, `reportHostDiagnostic`, `shellFailure`, `tabSweepCommand`, `uploadDriver`.

SHA-256 of the source span: `bb204d0a05c6df883d188e0c1b0765c937a9eab7c4f0fc1529d8a97f14e7b876`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
