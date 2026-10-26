# `buildSandEmailSendRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764567-764590](../../../../../../reference/runtime/host-main.cjs#L764567-L764590) | `FunctionDeclaration` | no | `args` |
| [evaluation:557935-557958](../../../../../../reference/runtime/sand-eval-runner.cjs#L557935-L557958) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764567-764590](../../../../../../reference/runtime/host-main.cjs#L764567-L764590) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557935-557958](../../../../../../reference/runtime/sand-eval-runner.cjs#L557935-L557958) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764567

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `provenanceContext`, `reviewArguments`, `structFromRecord`.

SHA-256 of the source span: `7f6050224e97d2a23797d61f85aef06bc989f3672321e10e60602667e2db06a2`.

### evaluation:557935

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `provenanceContext`, `reviewArguments`, `structFromRecord`.

SHA-256 of the source span: `7f6050224e97d2a23797d61f85aef06bc989f3672321e10e60602667e2db06a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
