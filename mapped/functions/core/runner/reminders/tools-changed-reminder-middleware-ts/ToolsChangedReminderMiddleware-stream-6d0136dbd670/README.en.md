# `ToolsChangedReminderMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/reminders/tools-changed-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/tools-changed-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586964-586985](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586964-L586985) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586964-586985](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586964-L586985) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586964

Calls written directly in this body: `.some`, `subagentTypesOffered`, `systemReminder`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `tools.map`, `toolsChangedReminderBody`.

Assignment or increment targets: `this.checked`.

SHA-256 of the source span: `772d159f7da835ea50e5ed11dfcccdb7689b826cc849abd5c1e5ef0239d24a78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
