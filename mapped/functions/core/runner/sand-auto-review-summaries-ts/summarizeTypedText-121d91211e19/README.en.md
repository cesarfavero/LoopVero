# `summarizeTypedText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693974-693979](../../../../../../reference/runtime/host-main.cjs#L693974-L693979) | `FunctionDeclaration` | no | `text3` |
| [evaluation:491410-491415](../../../../../../reference/runtime/sand-eval-runner.cjs#L491410-L491415) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693974-693979](../../../../../../reference/runtime/host-main.cjs#L693974-L693979) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491410-491415](../../../../../../reference/runtime/sand-eval-runner.cjs#L491410-L491415) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:693974

Calls written directly in this body: `.includes`, `/(?:api[_ -]?key|authorization|credential|password|secret|token)\s*[:=]/i.test`, `/^[A-Za-z0-9+/_=-]{24,}$/.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `text3.trim`.

SHA-256 of the source span: `249334ad7a08e3a42fefde589c0cdb91b421505b69fc72290ddf034a612347a4`.

### evaluation:491410

Calls written directly in this body: `.includes`, `/(?:api[_ -]?key|authorization|credential|password|secret|token)\s*[:=]/i.test`, `/^[A-Za-z0-9+/_=-]{24,}$/.test`, `SAND_AUTO_REVIEW_SECRET_VALUE_PATTERN.test`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `text3.trim`.

SHA-256 of the source span: `249334ad7a08e3a42fefde589c0cdb91b421505b69fc72290ddf034a612347a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
