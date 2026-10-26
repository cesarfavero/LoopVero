# `createTurnMcpExecutorEntries/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586026-586236](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586026-L586236) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586026-586236](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586026-L586236) | 22 | 0 | 8 | 5 | 1 | 5 |

### evaluation:586026

Calls written directly in this body: `.get`, `PERSONAL_BANK_AND_BROKERAGE_CONNECTOR_TAGS.has`, `appendNoteToMcpResult`, `boundedMcpToolName`, `ctx.get`, `ctx.with`, `describeResultNote`, `errorLogTag`, `grokBotSignedOutNeedsAuthMessage`, `guidedMcpExecutor.execute`, `host.autoReviewGate.assertNoPendingApproval`, `host.observation.beginMcpExecObservation`, `mainTurnSignedOut`, `mcp.getConnectorAuthStates`, `mcpErrorClassOf`, `mcpErrorResultClassOf`, `mcpResultErrorDetail`, `mcpThrownErrorDetail`, `mcpToolCallTarget`, `needsAuthHold.heldError`, `new McpError`, `new McpResult`, `new SystemReminder`, `playwrightBoxMcpWindowIndex`, `readSandAgentLoopModel`, `reportHostDiagnostic`, `resolveServerHost`, `result.result.value.systemReminders.push`, `scmWriteBlock`, `settleMcpExecObservation`, `signedOutMcpError`, `signedOutToolResultError`, `surfaceNeedsAuthCard`, `surfacePendingSignInCard.bind`, `systemReminderBody`, `toolCallTransientKindOf`, `turnToolHost.gates.driveTranslatorToolTags`, `turnToolHost.gates.financialDataReminder`, `watchStdioSignInDuring`.

Assignment or increment targets: `probes`, `result`, `result.result.value.error`, `signInNote`, `signedOut`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `10a109cc9e32907521fbf64e203c46f07dd07da6e0bae946bfffa7f17b74ded8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
