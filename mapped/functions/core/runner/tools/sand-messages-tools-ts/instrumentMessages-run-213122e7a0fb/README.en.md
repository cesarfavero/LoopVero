# `instrumentMessages/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778197-778216](../../../../../../../reference/runtime/host-main.cjs#L778197-L778216) | `ArrowFunctionExpression` | yes | `ctx, op, display` |
| [evaluation:577932-577951](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577932-L577951) | `ArrowFunctionExpression` | yes | `ctx, op, display` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778197-778216](../../../../../../../reference/runtime/host-main.cjs#L778197-L778216) | 1 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:577932-577951](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577932-L577951) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:778197

Calls written directly in this body: `isIntentionalAbortReason2`, `messages2.run`, `performance.now`, `reportMessagesToolUse`.

Assignment or increment targets: `result`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `2f1a096e542cbc75ae3986b204546d96642e22fbbedd6b8cab927e87fd483372`.

### evaluation:577932

Calls written directly in this body: `isIntentionalAbortReason2`, `messages.run`, `performance.now`, `reportMessagesToolUse`.

Assignment or increment targets: `result`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `2f4a4db834e18cf5d386bff0f7c58866778e614c69a9a8f8eb865e53a73e2f9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
