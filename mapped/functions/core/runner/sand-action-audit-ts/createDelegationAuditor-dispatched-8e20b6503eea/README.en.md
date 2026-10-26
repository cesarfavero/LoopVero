# `createDelegationAuditor/dispatched`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512289-512298](../../../../../../reference/runtime/sand-eval-runner.cjs#L512289-L512298) | `FunctionExpression` | no | `ctx, { toolCallId, ...dispatch }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512289-512298](../../../../../../reference/runtime/sand-eval-runner.cjs#L512289-L512298) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:512289

Calls written directly in this body: `auditor.record`, `delegationRecord`, `stopped.delete`.

SHA-256 of the source span: `3ef680f4f013e51867ed16fc48117d864f061ea8dbc478bb7944fb3c26b0b2d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
