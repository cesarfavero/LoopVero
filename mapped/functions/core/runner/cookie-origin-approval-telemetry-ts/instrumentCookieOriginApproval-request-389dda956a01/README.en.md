# `instrumentCookieOriginApproval/request`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-telemetry.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456128-456153](../../../../../../reference/runtime/host-main.cjs#L456128-L456153) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456128-456153](../../../../../../reference/runtime/host-main.cjs#L456128-L456153) | 2 | 0 | 1 | 1 | 1 | 1 |

### host:456128

Calls written directly in this body: `countOf`, `deps.now`, `port.request`, `reportCookieOriginApproval`.

Assignment or increment targets: `outcome`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `547c3bb93ee8e5ed6635b9eb0e2f22a1895e7e7b1c5227f4b60a1df1404359dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
