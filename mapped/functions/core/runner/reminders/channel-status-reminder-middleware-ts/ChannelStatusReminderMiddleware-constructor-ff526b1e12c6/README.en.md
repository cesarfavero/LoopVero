# `ChannelStatusReminderMiddleware.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480479-480484](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480479-L480484) | `method` | no | `innerExecutor, spec, status, reminders` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480479-480484](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480479-L480484) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:480479

Calls written directly in this body: `super`.

Assignment or increment targets: `this.reminders`, `this.spec`, `this.status`.

SHA-256 of the source span: `7e2516daaa586d0ba47a8b9424b2f22e1721029eb1555e6acb338509cd00b12d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
