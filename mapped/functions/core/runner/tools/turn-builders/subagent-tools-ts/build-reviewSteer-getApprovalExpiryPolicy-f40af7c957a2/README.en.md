# `build/reviewSteer/getApprovalExpiryPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/turn-builders/subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781192-781192](../../../../../../../../reference/runtime/host-main.cjs#L781192-L781192) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:581539-581539](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581539-L581539) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781192-781192](../../../../../../../../reference/runtime/host-main.cjs#L781192-L781192) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781192 uses an implicit arrow-function return.
| [evaluation:581539-581539](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581539-L581539) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581539 uses an implicit arrow-function return.

### host:781192

Calls written directly in this body: `host.activeTurnApprovalExpiryPolicy`.

SHA-256 of the source span: `cdb111e098d2834bc8f46bd073f0f06ad26db84f8c67586821d1f2cdb59e06a3`.

### evaluation:581539

Calls written directly in this body: `host.activeTurnApprovalExpiryPolicy`.

SHA-256 of the source span: `cdb111e098d2834bc8f46bd073f0f06ad26db84f8c67586821d1f2cdb59e06a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
