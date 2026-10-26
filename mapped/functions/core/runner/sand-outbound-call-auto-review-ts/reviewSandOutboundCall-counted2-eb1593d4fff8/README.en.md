# `reviewSandOutboundCall/counted2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-outbound-call-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-outbound-call-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763557-763557](../../../../../../reference/runtime/host-main.cjs#L763557-L763557) | `ArrowFunctionExpression` | no | `result, cause = "none"` |
| [evaluation:556599-556599](../../../../../../reference/runtime/sand-eval-runner.cjs#L556599-L556599) | `ArrowFunctionExpression` | no | `result, cause = "none"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763557-763557](../../../../../../reference/runtime/host-main.cjs#L763557-L763557) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:763557 uses an implicit arrow-function return.
| [evaluation:556599-556599](../../../../../../reference/runtime/sand-eval-runner.cjs#L556599-L556599) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:556599 uses an implicit arrow-function return.

### host:763557

Calls written directly in this body: `requests.increment`.

SHA-256 of the source span: `d3cfd6c384047e6f00e062ab4a33e74ab4fc436c4d901ad5ce89774e460ee7d0`.

### evaluation:556599

Calls written directly in this body: `requests.increment`.

SHA-256 of the source span: `d3cfd6c384047e6f00e062ab4a33e74ab4fc436c4d901ad5ce89774e460ee7d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
