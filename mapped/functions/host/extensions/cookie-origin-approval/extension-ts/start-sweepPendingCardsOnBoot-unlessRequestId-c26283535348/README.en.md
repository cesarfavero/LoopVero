# `start/sweepPendingCardsOnBoot/unlessRequestId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/extension.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543013-543013](../../../../../../../reference/runtime/host-main.cjs#L543013-L543013) | `ArrowFunctionExpression` | no | `requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543013-543013](../../../../../../../reference/runtime/host-main.cjs#L543013-L543013) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:543013 uses an implicit arrow-function return.

### host:543013

Calls written directly in this body: `bridge.hasPendingRequest`.

SHA-256 of the source span: `2ad9667c72377d5e14f5d07fc263cc1f3ae24e525461d7fdc45d1cb9259e172d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
