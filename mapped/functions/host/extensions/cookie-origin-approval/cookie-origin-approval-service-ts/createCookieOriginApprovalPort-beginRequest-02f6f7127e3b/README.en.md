# `createCookieOriginApprovalPort/beginRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-service.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542955-542965](../../../../../../../reference/runtime/host-main.cjs#L542955-L542965) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542955-542965](../../../../../../../reference/runtime/host-main.cjs#L542955-L542965) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:542955

Calls written directly in this body: `deps.desktop.begin`, `parseAgentId`, `terminalByRequestId.get`.

SHA-256 of the source span: `ec9d62bb8381da9a65e03e1ea752afdaa3aa9a1dd9d9fbbb321935d57c5b898f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
