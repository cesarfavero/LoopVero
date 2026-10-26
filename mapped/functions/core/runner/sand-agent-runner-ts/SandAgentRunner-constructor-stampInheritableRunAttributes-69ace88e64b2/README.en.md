# `_SandAgentRunner.constructor/stampInheritableRunAttributes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593779-593787](../../../../../../reference/runtime/sand-eval-runner.cjs#L593779-L593787) | `ArrowFunctionExpression` | no | `runCtx, inferenceRequestId, turnType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593779-593787](../../../../../../reference/runtime/sand-eval-runner.cjs#L593779-L593787) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:593779 uses an implicit arrow-function return.

### evaluation:593779

Calls written directly in this body: `.with`, `stampInheritableRunAttributes`, `this.getConversationId`.

SHA-256 of the source span: `fc50341b80fa340910348a7fe9ee25249268d1fb80a13cf6e6627b6d03a0f65e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
