# `cookieOriginApprovalAnswer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-cards.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774990-775009](../../../../../../reference/runtime/host-main.cjs#L774990-L775009) | `FunctionDeclaration` | no | `outcome` |
| [evaluation:574619-574638](../../../../../../reference/runtime/sand-eval-runner.cjs#L574619-L574638) | `FunctionDeclaration` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774990-775009](../../../../../../reference/runtime/host-main.cjs#L774990-L775009) | 10 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:574619-574638](../../../../../../reference/runtime/sand-eval-runner.cjs#L574619-L574638) | 10 | 0 | 0 | 5 | 0 | 0 |

### host:774990

Calls written directly in this body: `cookieOriginApprovalCardSettlement`.

SHA-256 of the source span: `de26f2b242231c70fde8eabecb08db44aac7ee607aaf71a27ae22dd8e61c170a`.

### evaluation:574619

Calls written directly in this body: `cookieOriginApprovalCardSettlement`.

SHA-256 of the source span: `de26f2b242231c70fde8eabecb08db44aac7ee607aaf71a27ae22dd8e61c170a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
