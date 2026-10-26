# `buildSandHistoryReadRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/history-reads/auto-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/history-reads/auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763113-763135](../../../../../../../../reference/runtime/host-main.cjs#L763113-L763135) | `FunctionDeclaration` | no | `args` |
| [evaluation:556081-556103](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556081-L556103) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763113-763135](../../../../../../../../reference/runtime/host-main.cjs#L763113-L763135) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556081-556103](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556081-L556103) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763113

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `43254a66d93fb8bf4d61a4fb8b7d8047b262a2693e16e5e1514a604ec0b3bd4e`.

### evaluation:556081

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `43254a66d93fb8bf4d61a4fb8b7d8047b262a2693e16e5e1514a604ec0b3bd4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
