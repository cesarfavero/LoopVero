# `resolveSandTurnToolDecisions/offersTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/enforcement.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/enforcement-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:543271-543271](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543271-L543271) | `ArrowFunctionExpression` | no | `toolId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543271-543271](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543271-L543271) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:543271 uses an implicit arrow-function return.

### evaluation:543271

Calls written directly in this body: `READONLY_CHILD_INBOX_WRITES.has`, `childInboxWritesWithheld`, `policy.offers`.

SHA-256 of the source span: `8b856e30a67edc1e4feedddbac1aa1fae381e07b6cea2a4e7b94d994ffa5984a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
