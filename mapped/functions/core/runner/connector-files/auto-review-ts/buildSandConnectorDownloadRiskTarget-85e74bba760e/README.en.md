# `buildSandConnectorDownloadRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/connector-files/auto-review.ts` · [Module README](../../../../../../modules/core/runner/connector-files/auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774884-774907](../../../../../../../reference/runtime/host-main.cjs#L774884-L774907) | `FunctionDeclaration` | no | `args` |
| [evaluation:574487-574510](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574487-L574510) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774884-774907](../../../../../../../reference/runtime/host-main.cjs#L774884-L774907) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574487-574510](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574487-L574510) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774884

Calls written directly in this body: `buildProjectPermissionsContext`, `downloadReviewArguments`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `d519f4a42dcb2f7c0bdcd5eea2b1e2ce7bf51c4e91fb3c2fef65c6c7935f317f`.

### evaluation:574487

Calls written directly in this body: `buildProjectPermissionsContext`, `downloadReviewArguments`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `d519f4a42dcb2f7c0bdcd5eea2b1e2ce7bf51c4e91fb3c2fef65c6c7935f317f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
