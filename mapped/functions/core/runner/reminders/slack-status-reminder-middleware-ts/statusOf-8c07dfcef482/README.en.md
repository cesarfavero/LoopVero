# `statusOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/slack-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/slack-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740960-740963](../../../../../../../reference/runtime/host-main.cjs#L740960-L740963) | `FunctionExpression` | no | `args` |
| [evaluation:480555-480558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480555-L480558) | `FunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740960-740963](../../../../../../../reference/runtime/host-main.cjs#L740960-L740963) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480555-480558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480555-L480558) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740960

Calls written directly in this body: `setSlackStatusParameters.safeParse`.

SHA-256 of the source span: `c4d3b96f0018e203a7ee199d4e2a2bb0b76b776bc3cf1c55bf8756633b83a0fc`.

### evaluation:480555

Calls written directly in this body: `setSlackStatusParameters.safeParse`.

SHA-256 of the source span: `a3dcfa6c73dd2f6c29338739bf35eabee9729b2b4bc1bbb8b0ae832f6d9127e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
