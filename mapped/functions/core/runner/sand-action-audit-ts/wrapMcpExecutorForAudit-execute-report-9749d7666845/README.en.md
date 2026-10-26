# `wrapMcpExecutorForAudit/execute/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512328-512353](../../../../../../reference/runtime/sand-eval-runner.cjs#L512328-L512353) | `ArrowFunctionExpression` | no | `status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512328-512353](../../../../../../reference/runtime/sand-eval-runner.cjs#L512328-L512353) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:512328

Calls written directly in this body: `.catch`, `Date.now`, `transportPromise.then`.

SHA-256 of the source span: `6bd423686315184197cc1f42c36459a58f12b8642c486981c63945f2352f6808`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
