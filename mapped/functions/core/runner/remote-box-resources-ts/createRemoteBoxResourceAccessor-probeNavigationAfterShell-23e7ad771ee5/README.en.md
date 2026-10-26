# `createRemoteBoxResourceAccessor/probeNavigationAfterShell`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/remote-box-resources.ts` · [Module README](../../../../../modules/core/runner/remote-box-resources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534547-534550](../../../../../../reference/runtime/sand-eval-runner.cjs#L534547-L534550) | `ArrowFunctionExpression` | no | `ctx, connection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534547-534550](../../../../../../reference/runtime/sand-eval-runner.cjs#L534547-L534550) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534547

Calls written directly in this body: `host.probeNavigationAfterComputerUse`, `ownsMonitorForShellNavigationAudit`.

SHA-256 of the source span: `f6b377b38e7ff55b3caf249c1d92e75db2db00894713582ef0c26ee25ee6541c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
