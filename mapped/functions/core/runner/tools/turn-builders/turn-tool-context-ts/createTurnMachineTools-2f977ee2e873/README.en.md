# `createTurnMachineTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/turn-tool-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569441-569540](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569441-L569540) | `FunctionDeclaration` | no | `host, turn, props, shared` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569441-569540](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569441-L569540) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:569441

Calls written directly in this body: `createAwaitTool`, `createFileTransferAudit`, `createReadTool`, `createSandAutoReviewShellGate`, `createShellTool`, `host.createFileTransferController`, `host.getConversationId`, `host.hasShellUserComputer`, `host.hasUserComputer`, `new CombinedResourceAccessor`, `props.resourceAccessor.get`, `readonlyWakeUserMachineOffers`, `resourceEntry`, `sandMaxBlockUntilMs`, `scopeLocalTool`, `turn.getAutoReviewUserInstructions`, `withRecordedToolCallNames`, `wrapReadExecutorForFileTransferAudit`.

SHA-256 of the source span: `a33be9459221c97bf076b16e0506f01f70f32daccd53a8c5995129103fd6fb8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
