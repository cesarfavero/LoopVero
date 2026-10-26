# `buildRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/device-local-tools/device-tool-auto-review.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566194-566210](../../../../../../reference/runtime/sand-eval-runner.cjs#L566194-L566210) | `ArrowFunctionExpression` | no | `{ target, ...instructions }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566194-566210](../../../../../../reference/runtime/sand-eval-runner.cjs#L566194-L566210) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:566194 uses an implicit arrow-function return.

### evaluation:566194

Calls written directly in this body: `buildProjectPermissionsContext`, `isUnknownRecord2`, `new SmartModeRiskTarget`, `phoneToolReadsOnly`, `structFromRecord`, `summarizeDeviceToolCall`.

SHA-256 of the source span: `107b5979a52922bf4941c18152d6268900bb656442879911debdce1ba943b175`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
