# `wrapMcpExecutorForAudit/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512322-512362](../../../../../../reference/runtime/sand-eval-runner.cjs#L512322-L512362) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512322-512362](../../../../../../reference/runtime/sand-eval-runner.cjs#L512322-L512362) | 0 | 0 | 1 | 1 | 1 | 1 |

### evaluation:512322

Calls written directly in this body: `.catch`, `Date.now`, `ctx.with`, `deps.resolveTransport`, `deps.sequencer.next`, `inner.execute`, `mcpAuditStatus`, `report`, `turnAttributionFromContext`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `cc596619946844377b00d198f0cfaf252af6cb213b446251d91114a51e2a15e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
