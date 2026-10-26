# `createSentLinkChecks/countDelivered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583504-583515](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583504-L583515) | `ArrowFunctionExpression` | no | `ctx, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583504-583515](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583504-L583515) | 0 | 1 | 0 | 0 | 0 | 1 |

### evaluation:583504

Calls written directly in this body: `checksFor`, `errorLogTag`, `logger98.warn`, `sentLinkCheck.increment`.

SHA-256 of the source span: `cbf7213eaa16f0a183c902890bd979df9a2e37e4ea71e3b4292693e51aa93aa4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
