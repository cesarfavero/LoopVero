# `createAutomationSubagentTransport/onUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/transport.ts` · [Module README](../../../../../modules/core/ports/transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583783-583783](../../../../../../reference/runtime/sand-eval-runner.cjs#L583783-L583783) | `ArrowFunctionExpression` | no | `update` |
| [evaluation:583796-583802](../../../../../../reference/runtime/sand-eval-runner.cjs#L583796-L583802) | `ArrowFunctionExpression` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583783-583783](../../../../../../reference/runtime/sand-eval-runner.cjs#L583783-L583783) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:583783 uses an implicit arrow-function return.
| [evaluation:583796-583802](../../../../../../reference/runtime/sand-eval-runner.cjs#L583796-L583802) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583783

Calls written directly in this body: `transport.onUpdate`.

SHA-256 of the source span: `49302ae6c715620809efa0e63c1a39492cf76ee4b9b53b61b4a06539e36cb102`.

### evaluation:583796

Calls written directly in this body: `isAutomationParentCard`, `transport.onUpdate`.

SHA-256 of the source span: `60b4bfa2699716e4bbefac4c8c1c636444f63c1f2ec82a2e1bcdd854aa46752c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
