# `summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-cloud-agent-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775901-775905](../../../../../../reference/runtime/host-main.cjs#L775901-L775905) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:575544-575548](../../../../../../reference/runtime/sand-eval-runner.cjs#L575544-L575548) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775901-775905](../../../../../../reference/runtime/host-main.cjs#L775901-L775905) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:775901 uses an implicit arrow-function return.
| [evaluation:575544-575548](../../../../../../reference/runtime/sand-eval-runner.cjs#L575544-L575548) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:575544 uses an implicit arrow-function return.

### host:775901

Calls written directly in this body: `summarizeSandCloudAgentAction`.

SHA-256 of the source span: `40b48dabed373784b150500eff541dfd3ccf9684d28c4d8e770bebfc3581bba7`.

### evaluation:575544

Calls written directly in this body: `summarizeSandCloudAgentAction`.

SHA-256 of the source span: `40b48dabed373784b150500eff541dfd3ccf9684d28c4d8e770bebfc3581bba7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
