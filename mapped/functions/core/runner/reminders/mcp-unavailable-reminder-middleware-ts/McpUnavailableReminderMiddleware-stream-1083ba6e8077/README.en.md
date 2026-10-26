# `McpUnavailableReminderMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/reminders/mcp-unavailable-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/mcp-unavailable-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586898-586917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586898-L586917) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586898-586917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586898-L586917) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586898

Calls written directly in this body: `.some`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `this.isUnavailable`.

SHA-256 of the source span: `a01776d56d1b3e89451a1f734f1fd38971727626d5580ddccbcb7c70ed911e61`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
