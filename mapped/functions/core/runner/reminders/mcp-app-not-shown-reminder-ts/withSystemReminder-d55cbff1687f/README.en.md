# `withSystemReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/reminders/mcp-app-not-shown-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/mcp-app-not-shown-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585603-585608](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585603-L585608) | `FunctionDeclaration` | no | `result, body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585603-585608](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585603-L585608) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585603

Calls written directly in this body: `new McpResult`, `new SystemReminder`, `result.result.value.clone`, `success2.systemReminders.push`.

SHA-256 of the source span: `18c7e4cba254793173eb85e23cfb83afc31cc435a449c9b41287c6f7a6bad9a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
