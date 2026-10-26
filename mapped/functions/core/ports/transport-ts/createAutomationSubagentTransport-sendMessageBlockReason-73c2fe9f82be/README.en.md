# `createAutomationSubagentTransport/sendMessageBlockReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/transport.ts` · [Module README](../../../../../modules/core/ports/transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583786-583791](../../../../../../reference/runtime/sand-eval-runner.cjs#L583786-L583791) | `ArrowFunctionExpression` | no | `message, deliverTo` |
| [evaluation:583805-583805](../../../../../../reference/runtime/sand-eval-runner.cjs#L583805-L583805) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583786-583791](../../../../../../reference/runtime/sand-eval-runner.cjs#L583786-L583791) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:583805-583805](../../../../../../reference/runtime/sand-eval-runner.cjs#L583805-L583805) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:583805 uses an implicit arrow-function return.

### evaluation:583786

Calls written directly in this body: `transport.sendMessageBlockReason`.

SHA-256 of the source span: `92742e352b620ac0296081779a30e20712621e16e6fc63b9a9d6a2f46d75e343`.

### evaluation:583805

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `fb429b5c1d0eb9764fe038072cda0b19f82332a70b1165588bda794e2682af19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
