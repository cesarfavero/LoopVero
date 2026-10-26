# `wrapReadExecutorForFileTransferAudit/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/file-transfer-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569150-569166](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569150-L569166) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569150-569166](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569150-L569166) | 1 | 0 | 1 | 1 | 1 | 1 |

### evaluation:569150

Calls written directly in this body: `bindFileTransferAudit`, `failedFileTransferResult`, `inner.execute`, `readFileTransferResult`, `record4`, `resolveMachineId2`.

Assignment or increment targets: `result`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `365c285ef0bad197c505c6a2faac591b9efbe6f61c8dada1bf5286a3967746ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
