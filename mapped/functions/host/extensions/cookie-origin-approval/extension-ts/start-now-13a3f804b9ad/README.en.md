# `start/now`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/extension.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543003-543003](../../../../../../../reference/runtime/host-main.cjs#L543003-L543003) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543003-543003](../../../../../../../reference/runtime/host-main.cjs#L543003-L543003) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:543003 uses an implicit arrow-function return.

### host:543003

Calls written directly in this body: `realClock.now`.

SHA-256 of the source span: `74df4bbba01a3276e2ee452d401e9e131a84cb993b7bb437218519e6612c2fe8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
