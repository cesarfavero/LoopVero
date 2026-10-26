# `statusOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/teams-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/teams-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740996-740999](../../../../../../../reference/runtime/host-main.cjs#L740996-L740999) | `FunctionExpression` | no | `args` |
| [evaluation:480597-480600](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480597-L480600) | `FunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740996-740999](../../../../../../../reference/runtime/host-main.cjs#L740996-L740999) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480597-480600](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480597-L480600) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740996

Calls written directly in this body: `setMicrosoftTeamsStatusParameters.safeParse`.

SHA-256 of the source span: `ee4b9ada9f9dcbb6a7ae8ed3682ec567db586b24441183fd01982a00a0fb5066`.

### evaluation:480597

Calls written directly in this body: `setMicrosoftTeamsStatusParameters.safeParse`.

SHA-256 of the source span: `3aae871dacbf8cec6b9ae778a805e876664095e494859ab9cb568e09ebce092b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
