# `createTurnMcpExecutorEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585907-586246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585907-L586246) | `FunctionDeclaration` | no | `host, turnToolHost, turn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585907-586246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585907-L586246) | 7 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585907

Calls written directly in this body: `allowsSystemReminder`, `createMcpAppServerCheck`, `createNeedsAuthCards`, `host.mcpConfigJsonForTurn`, `host.promptGlue.createMcpTextSpiller`, `mcp.createExecutor`, `mcp.createStateExecutor`, `resourceEntry`, `turnToolHost.gates.needsAuthLiveState`, `turnToolHost.gates.needsAuthTurnHold`, `turnToolHost.gates.stdioSignInCard`, `turnToolHost.getConversationId`, `withAtlassianCloudId`, `withConnectorDraftCardReminder`, `withGmailToolGuards`, `withMcpAppNotShownReminder`, `withPlaywrightResultShaping`, `withPlaywrightSnapshotFallback`, `withPluginGuideReminderWhenOn`, `withServersNeedingAuth`, `withUnapprovableAttachmentForwardRefusal`, `wrapMcpExecutorForAudit`, `wrapMcpExecutorForLibraryDocs`.

SHA-256 of the source span: `1c999393f1fde08070c764bb25a10a9a3f117dd55cadcc5125a3c7b37a04644b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
