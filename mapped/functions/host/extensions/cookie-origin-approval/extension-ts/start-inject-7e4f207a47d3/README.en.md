# `start/inject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/extension.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542998-542998](../../../../../../../reference/runtime/host-main.cjs#L542998-L542998) | `ArrowFunctionExpression` | no | `cookies` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542998-542998](../../../../../../../reference/runtime/host-main.cjs#L542998-L542998) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:542998 uses an implicit arrow-function return.

### host:542998

Calls written directly in this body: `context2.deps[computed].inject`.

SHA-256 of the source span: `96bc44552a4f92a746b94587bed4b8dd3d0fa78af130d17978453f6293ee919d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
