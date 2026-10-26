# `withMcpAppNotShownReminder/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/reminders/mcp-app-not-shown-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/mcp-app-not-shown-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585612-585618](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585612-L585618) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585612-585618](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585612-L585618) | 1 | 0 | 2 | 2 | 0 | 0 |

### evaluation:585612

Calls written directly in this body: `boundedConnectorTag`, `deps.draftCardAvailable`, `executor.execute`, `hidesAppView`, `mcpAppNotShownReminder`, `providerOf`, `withSystemReminder`, `withheldMcpAppCards.increment`.

SHA-256 of the source span: `f8ce32df6d54e1042d1346fae72ada56c5cd5042c84bef0d210b1a5835caf50e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
