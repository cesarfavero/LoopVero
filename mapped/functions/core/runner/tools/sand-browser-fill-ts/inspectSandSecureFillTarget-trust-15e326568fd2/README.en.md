# `inspectSandSecureFillTarget/trust`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727557-727557](../../../../../../../reference/runtime/host-main.cjs#L727557-L727557) | `ArrowFunctionExpression` | no | `result` |
| [evaluation:562012-562012](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562012-L562012) | `ArrowFunctionExpression` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727557-727557](../../../../../../../reference/runtime/host-main.cjs#L727557-L727557) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:727557 uses an implicit arrow-function return.
| [evaluation:562012-562012](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562012-L562012) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:562012 uses an implicit arrow-function return.

### host:727557

Calls written directly in this body: `belt.trustResult`.

SHA-256 of the source span: `badafff62bba638d7e0d1ceb688cf30d5cf6da95484f1653dcc0de2e0b05302d`.

### evaluation:562012

Calls written directly in this body: `belt.trustResult`.

SHA-256 of the source span: `badafff62bba638d7e0d1ceb688cf30d5cf6da95484f1653dcc0de2e0b05302d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
