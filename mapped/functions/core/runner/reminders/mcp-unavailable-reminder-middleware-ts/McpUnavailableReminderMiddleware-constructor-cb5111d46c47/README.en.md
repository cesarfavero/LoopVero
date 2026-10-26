# `McpUnavailableReminderMiddleware.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/reminders/mcp-unavailable-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/mcp-unavailable-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586891-586895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586891-L586895) | `method` | no | `innerExecutor, isUnavailable, episodeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586891-586895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586891-L586895) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:586891

Calls written directly in this body: `super`.

Assignment or increment targets: `this.episodeId`, `this.isUnavailable`.

SHA-256 of the source span: `94b8632cb5035c3c09ca6319b4e84245426c3a270b7d7958ca609b38a8008a13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
