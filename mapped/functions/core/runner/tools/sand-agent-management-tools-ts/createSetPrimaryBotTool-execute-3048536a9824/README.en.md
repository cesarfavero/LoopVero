# `createSetPrimaryBotTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757516-757519](../../../../../../../reference/runtime/host-main.cjs#L757516-L757519) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:543539-543542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543539-L543542) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757516-757519](../../../../../../../reference/runtime/host-main.cjs#L757516-L757519) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:543539-543542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543539-L543542) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:757516

Calls written directly in this body: `d.setPrimaryBot`.

SHA-256 of the source span: `1fd6d2beef10a2c10a02e64d51f5380543b1e3dc786630825db822ecb7b94351`.

### evaluation:543539

Calls written directly in this body: `d.setPrimaryBot`.

SHA-256 of the source span: `1fd6d2beef10a2c10a02e64d51f5380543b1e3dc786630825db822ecb7b94351`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
