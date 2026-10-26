# `start/cancelRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/extension.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543024-543024](../../../../../../../reference/runtime/host-main.cjs#L543024-L543024) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543024-543024](../../../../../../../reference/runtime/host-main.cjs#L543024-L543024) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:543024 uses an implicit arrow-function return.

### host:543024

Calls written directly in this body: `port.cancelRequest`.

SHA-256 of the source span: `5f8fc976c748c68af914c105eb38cd8e6c9dc4359abcc3431b5caf1d7ab847dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
