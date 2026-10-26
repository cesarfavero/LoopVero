# `createCookieOriginApprovalPort/settleResolved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-service.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542887-542904](../../../../../../../reference/runtime/host-main.cjs#L542887-L542904) | `ArrowFunctionExpression` | yes | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542887-542904](../../../../../../../reference/runtime/host-main.cjs#L542887-L542904) | 3 | 0 | 1 | 3 | 0 | 1 |

### host:542887

Calls written directly in this body: `deps.inject`, `deps.log`, `errorLogTag`.

SHA-256 of the source span: `638cda8c5620a4768d9aaa05cac232d88cc067dc50a39df1a6593db362ce3990`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
