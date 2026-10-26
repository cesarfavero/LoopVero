# `start/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/extension.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543004-543004](../../../../../../../reference/runtime/host-main.cjs#L543004-L543004) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543004-543004](../../../../../../../reference/runtime/host-main.cjs#L543004-L543004) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:543004 uses an implicit arrow-function return.

### host:543004

Calls written directly in this body: `context2.deps.telemetry.logs.reportCookieOriginApproval`.

SHA-256 of the source span: `cf81045f3a6a65abf1357cd43724b17ddb9f2ba97fd3b761c5a3487d44d89056`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
