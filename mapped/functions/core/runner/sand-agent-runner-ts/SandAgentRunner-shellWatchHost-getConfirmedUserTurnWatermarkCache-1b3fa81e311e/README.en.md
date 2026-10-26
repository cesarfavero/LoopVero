# `_SandAgentRunner.shellWatchHost/getConfirmedUserTurnWatermarkCache`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594003-594003](../../../../../../reference/runtime/sand-eval-runner.cjs#L594003-L594003) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594003-594003](../../../../../../reference/runtime/sand-eval-runner.cjs#L594003-L594003) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:594003 uses an implicit arrow-function return.

### evaluation:594003

Calls written directly in this body: `decodeConfirmedUserTurnWatermark`, `this.confirmedUserTurnWatermarkStore.read`.

SHA-256 of the source span: `cc5b29ea44177a3bf0061ed7bb3ae806a8feead324194206a5104f4ca3e8e2e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
