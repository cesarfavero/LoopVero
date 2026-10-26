# `reportCookieOriginApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-telemetry.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456119-456125](../../../../../../reference/runtime/host-main.cjs#L456119-L456125) | `FunctionDeclaration` | no | `deps, makeReport` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456119-456125](../../../../../../reference/runtime/host-main.cjs#L456119-L456125) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:456119

Calls written directly in this body: `deps.log`, `deps.report`, `errorLogTag`, `makeReport`.

SHA-256 of the source span: `b6524244c5c103ae41bb0700644b3a85c552d0113d9ee72b8fb7614f8bbbb7e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
