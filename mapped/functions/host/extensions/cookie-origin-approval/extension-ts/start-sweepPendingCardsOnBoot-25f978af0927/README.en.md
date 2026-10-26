# `start/sweepPendingCardsOnBoot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/extension.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543008-543018](../../../../../../../reference/runtime/host-main.cjs#L543008-L543018) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543008-543018](../../../../../../../reference/runtime/host-main.cjs#L543008-L543018) | 0 | 0 | 2 | 0 | 0 | 1 |

### host:543008

Calls written directly in this body: `context2.deps.transcript.widgetResponses.expireAllPendingCookieOriginApprovalCards`, `context2.host.log`, `errorLogTag`.

SHA-256 of the source span: `1b88f3d38586827ed95ed43e9b129f7f75c8fcaa954c65cb5a46f8a5deea66fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
