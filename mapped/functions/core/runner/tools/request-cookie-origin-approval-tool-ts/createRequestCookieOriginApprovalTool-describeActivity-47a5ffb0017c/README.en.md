# `createRequestCookieOriginApprovalTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775201-775207](../../../../../../../reference/runtime/host-main.cjs#L775201-L775207) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:574848-574854](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574848-L574854) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775201-775207](../../../../../../../reference/runtime/host-main.cjs#L775201-L775207) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574848-574854](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574848-L574854) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:775201

Calls written directly in this body: `.join`, `normalizeCookieOriginApprovalOrigins`, `origins.map`.

SHA-256 of the source span: `ba0908c9a29b03054776bbafd1cb992b25ad768decafc2fe822024095c0bd8f1`.

### evaluation:574848

Calls written directly in this body: `.join`, `normalizeCookieOriginApprovalOrigins`, `origins.map`.

SHA-256 of the source span: `ba0908c9a29b03054776bbafd1cb992b25ad768decafc2fe822024095c0bd8f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
