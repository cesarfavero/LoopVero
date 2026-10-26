# `withDeviceToolAutoReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/device-local-tools/device-tool-auto-review.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566233-566274](../../../../../../reference/runtime/sand-eval-runner.cjs#L566233-L566274) | `FunctionDeclaration` | no | `port, review, tools = SAND_DEVICE_LOCAL_TOOLS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566233-566274](../../../../../../reference/runtime/sand-eval-runner.cjs#L566233-L566274) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566233

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a6a5b0aa6bf5246ccc5289cb7bf543f15e31c8667a7a9e6c3bedfef657ac5832`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
