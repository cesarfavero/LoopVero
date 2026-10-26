# `createStreamWatchdog/clearDeadlineHooksIf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590183-590185](../../../../../../reference/runtime/sand-eval-runner.cjs#L590183-L590185) | `ArrowFunctionExpression` | no | `hooks` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590183-590185](../../../../../../reference/runtime/sand-eval-runner.cjs#L590183-L590185) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:590183

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `deadlineHooks`.

SHA-256 of the source span: `754e1b73ecb437c01d2a69de948a4559bb59f650a71fe7803ac85444db1c2362`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
