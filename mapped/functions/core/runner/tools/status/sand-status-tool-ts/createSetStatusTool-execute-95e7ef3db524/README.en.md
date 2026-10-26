# `createSetStatusTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/status/sand-status-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/status/sand-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740898-740901](../../../../../../../../reference/runtime/host-main.cjs#L740898-L740901) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |
| [evaluation:480253-480256](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480253-L480256) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740898-740901](../../../../../../../../reference/runtime/host-main.cjs#L740898-L740901) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480253-480256](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480253-L480256) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740898

Calls written directly in this body: `deps.set`.

SHA-256 of the source span: `87f4c2d06a887801dcf629bcefdf23d1a22f55c1df3db8e815dc10cf1419f36b`.

### evaluation:480253

Calls written directly in this body: `deps.set`.

SHA-256 of the source span: `87f4c2d06a887801dcf629bcefdf23d1a22f55c1df3db8e815dc10cf1419f36b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
