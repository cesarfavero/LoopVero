# `buildCommunicateTool/serializeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725241-725257](../../../../../../../reference/runtime/host-main.cjs#L725241-L725257) | `ArrowFunctionExpression` | no | `error64` |
| [evaluation:480212-480228](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480212-L480228) | `ArrowFunctionExpression` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725241-725257](../../../../../../../reference/runtime/host-main.cjs#L725241-L725257) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480212-480228](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480212-L480228) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725241

Calls written directly in this body: `buildErrorResult`, `encodeError`, `modelVisibleErrorMessage`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 of the source span: `08d38d392547863dadb03347120506ed2c01eb2c94b0224519f8705c6164fcf1`.

### evaluation:480212

Calls written directly in this body: `buildErrorResult`, `encodeError`, `modelVisibleErrorMessage`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 of the source span: `5af98a82c60f0340e1ccc1616696c11db81ab9b3a46cd2c571c1fe2b3fd0de2a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
