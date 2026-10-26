# `createStreamAttempt/runStreamOnce/<callback>/noteStreamActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590313-590326](../../../../../../reference/runtime/sand-eval-runner.cjs#L590313-L590326) | `ArrowFunctionExpression` | no | `activity` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590313-590326](../../../../../../reference/runtime/sand-eval-runner.cjs#L590313-L590326) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590313

Calls written directly in this body: `armed.dispose`, `idleExpiry.arm`, `toolCallsInFlight.add`, `toolCallsInFlight.delete`.

Assignment or increment targets: `armed`, `armedDeadlineMs`.

SHA-256 of the source span: `9954f81fe2315bbe39e42b5a9f11e2e2a6a547e423746e9decc081e692340bbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
