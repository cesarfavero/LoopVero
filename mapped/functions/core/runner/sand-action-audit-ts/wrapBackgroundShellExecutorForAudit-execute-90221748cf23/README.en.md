# `wrapBackgroundShellExecutorForAudit/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512901-512912](../../../../../../reference/runtime/sand-eval-runner.cjs#L512901-L512912) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512901-512912](../../../../../../reference/runtime/sand-eval-runner.cjs#L512901-L512912) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:512901

Calls written directly in this body: `Date.now`, `deps.target`, `inner.execute`, `recordShellAudit`, `shellAuditAction`, `turnAttributionFromContext`.

SHA-256 of the source span: `a07b945bc8596f476ce365b75072f4fb1e466cddc650745013c10c7c2f25724e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
