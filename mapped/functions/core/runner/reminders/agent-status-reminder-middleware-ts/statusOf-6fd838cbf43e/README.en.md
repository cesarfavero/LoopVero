# `statusOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/agent-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/agent-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740917-740920](../../../../../../../reference/runtime/host-main.cjs#L740917-L740920) | `FunctionExpression` | no | `args` |
| [evaluation:480506-480509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480506-L480509) | `FunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740917-740920](../../../../../../../reference/runtime/host-main.cjs#L740917-L740920) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480506-480509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480506-L480509) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740917

Calls written directly in this body: `setStatusParameters.safeParse`.

SHA-256 of the source span: `f7c9862208b4fd21967933130917e891b3273ac3316755c6ffe371c4a2c79e38`.

### evaluation:480506

Calls written directly in this body: `setStatusParameters.safeParse`.

SHA-256 of the source span: `b15dab8111bc2b000748607a5d752b5f529495facceb316ba373b819bcdd2509`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
