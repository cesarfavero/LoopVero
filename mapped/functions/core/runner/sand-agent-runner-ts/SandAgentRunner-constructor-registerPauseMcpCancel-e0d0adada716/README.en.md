# `_SandAgentRunner.constructor/registerPauseMcpCancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593292-593300](../../../../../../reference/runtime/sand-eval-runner.cjs#L593292-L593300) | `ArrowFunctionExpression` | no | `cancel` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593292-593300](../../../../../../reference/runtime/sand-eval-runner.cjs#L593292-L593300) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:593292

Calls written directly in this body: `cancel`, `this.isPausingForUpgrade`, `this.pauseMcpCallCancellers.add`.

SHA-256 of the source span: `47f8033466fc178b7be37ec0e502d571492c122903ffe483e835d194df9dc832`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
