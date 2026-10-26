# `createRequestCookieOriginApprovalTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775208-775229](../../../../../../../reference/runtime/host-main.cjs#L775208-L775229) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |
| [evaluation:574855-574876](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574855-L574876) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775208-775229](../../../../../../../reference/runtime/host-main.cjs#L775208-L775229) | 5 | 0 | 4 | 3 | 0 | 0 |
| [evaluation:574855-574876](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574855-L574876) | 5 | 0 | 4 | 3 | 0 | 0 |

### host:775208

Calls written directly in this body: `formatCookieOriginApprovalOutcome`, `normalizeCookieOriginApprovalOrigins`, `pinnedProfileIds`, `rejectUnknownCookieProfileIds`, `request5`, `resolveCardTaskThread`, `toolDeps.request`, `withToolExecutionTimeoutSuspended`.

SHA-256 of the source span: `c090f2d634dea8103709c5fac584e8a55a124481e37892f5a53ee364e6d624c1`.

### evaluation:574855

Calls written directly in this body: `formatCookieOriginApprovalOutcome`, `normalizeCookieOriginApprovalOrigins`, `pinnedProfileIds`, `rejectUnknownCookieProfileIds`, `request3`, `resolveCardTaskThread`, `toolDeps.request`, `withToolExecutionTimeoutSuspended`.

SHA-256 of the source span: `0895ede185bf4276f24de4fb947cd3a15a9d25ae3178a50d132099e489e92579`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
