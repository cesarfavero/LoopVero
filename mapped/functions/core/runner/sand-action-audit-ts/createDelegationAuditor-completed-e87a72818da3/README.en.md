# `createDelegationAuditor/completed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512299-512311](../../../../../../reference/runtime/sand-eval-runner.cjs#L512299-L512311) | `FunctionExpression` | no | `ctx, { toolCallId, ...settled }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512299-512311](../../../../../../reference/runtime/sand-eval-runner.cjs#L512299-L512311) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:512299

Calls written directly in this body: `auditor.record`, `delegationRecord`, `stopped.add`, `stopped.has`.

SHA-256 of the source span: `cc2c12c87849748e29f839e125869788749d4bb31cbe90985b0c20b5f0cffd62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
