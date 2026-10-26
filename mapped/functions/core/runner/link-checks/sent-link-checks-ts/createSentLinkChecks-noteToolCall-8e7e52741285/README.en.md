# `createSentLinkChecks/noteToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583490-583502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583490-L583502) | `ArrowFunctionExpression` | no | `event, toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583490-583502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583490-L583502) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583490

Calls written directly in this body: `addBounded`, `command.slice`, `linkKey2`.

SHA-256 of the source span: `296a030cd96f22a1e264c6db90f1b9f0e242537ccf676d4c133f48ca4062e9dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
