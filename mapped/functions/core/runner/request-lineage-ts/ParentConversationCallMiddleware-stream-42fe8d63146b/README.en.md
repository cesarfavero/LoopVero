# `ParentConversationCallMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/request-lineage.ts` · [Module README](../../../../../modules/core/runner/request-lineage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534800-534802](../../../../../../reference/runtime/sand-eval-runner.cjs#L534800-L534802) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534800-534802](../../../../../../reference/runtime/sand-eval-runner.cjs#L534800-L534802) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534800

Calls written directly in this body: `bindParentConversationCall`, `this.innerExecutor.stream`.

SHA-256 of the source span: `ea91a8a82e07b68396c87eca33b1fb6fdb4904324cc9179ef51413a8bc4b0967`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
