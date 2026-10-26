# `sandModelCallUsageObserver/onRequestStart/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529378-529382](../../../../../../reference/runtime/sand-eval-runner.cjs#L529378-L529382) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529378-529382](../../../../../../reference/runtime/sand-eval-runner.cjs#L529378-L529382) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529378

Calls written directly in this body: `onModelCallUsage`.

Assignment or increment targets: `usage`.

SHA-256 of the source span: `eb62f1efb605e4b28ae961267464b10a7dd764035b952b51c75071b0de76b4a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
