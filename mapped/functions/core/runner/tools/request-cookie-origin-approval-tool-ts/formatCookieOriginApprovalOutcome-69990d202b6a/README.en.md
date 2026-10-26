# `formatCookieOriginApprovalOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775158-775186](../../../../../../../reference/runtime/host-main.cjs#L775158-L775186) | `FunctionDeclaration` | no | `outcome` |
| [evaluation:574805-574833](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574805-L574833) | `FunctionDeclaration` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775158-775186](../../../../../../../reference/runtime/host-main.cjs#L775158-L775186) | 7 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:574805-574833](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574805-L574833) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:775158

Calls written directly in this body: `.join`, `describeGrants`, `outcome.items.map`.

SHA-256 of the source span: `5f561fe505b433d8bb472e7eb3182946a9d8db13948440717db0d96a1806c4a7`.

### evaluation:574805

Calls written directly in this body: `.join`, `describeGrants`, `outcome.items.map`.

SHA-256 of the source span: `5f561fe505b433d8bb472e7eb3182946a9d8db13948440717db0d96a1806c4a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
