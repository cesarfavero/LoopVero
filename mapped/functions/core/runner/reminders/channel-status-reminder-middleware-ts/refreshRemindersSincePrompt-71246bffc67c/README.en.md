# `refreshRemindersSincePrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480451-480461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480451-L480461) | `FunctionDeclaration` | no | `spec, messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480451-480461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480451-L480461) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:480451

Calls written directly in this body: `channelStatusReminderKindOf`, `isInjectedReminderMessage`.

Assignment or increment targets: `count2`, `index`.

SHA-256 of the source span: `c40289a91fd2cf9a2f4c8689c82059b2a44f36df2a5e9bb6295db9d84095bbc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
