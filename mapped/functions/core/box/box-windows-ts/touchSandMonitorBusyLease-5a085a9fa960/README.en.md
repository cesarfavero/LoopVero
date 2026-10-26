# `touchSandMonitorBusyLease`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534047-534065](../../../../../../reference/runtime/sand-eval-runner.cjs#L534047-L534065) | `FunctionDeclaration` | yes | `ctx, accessor, windowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534047-534065](../../../../../../reference/runtime/sand-eval-runner.cjs#L534047-L534065) | 1 | 0 | 1 | 1 | 0 | 1 |

### evaluation:534047

Calls written directly in this body: `.execute`, `Number.isInteger`, `accessor.get`, `buildHostShellArgs`, `errorLogTag`, `reportHostDiagnosticOrStderr`.

SHA-256 of the source span: `93855093179860166ca82cc086a81c2a32300845d86499d3a5beb298cf0fa79d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
