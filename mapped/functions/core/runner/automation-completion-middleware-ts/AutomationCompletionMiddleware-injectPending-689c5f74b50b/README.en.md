# `AutomationCompletionMiddleware.injectPending`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/automation-completion-middleware.ts` · [Module README](../../../../../modules/core/runner/automation-completion-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586364-586411](../../../../../../reference/runtime/sand-eval-runner.cjs#L586364-L586411) | `method` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586364-586411](../../../../../../reference/runtime/sand-eval-runner.cjs#L586364-L586411) | 7 | 3 | 0 | 1 | 0 | 1 |

### evaluation:586364

Calls written directly in this body: `completionIdOf`, `completionMessages.push`, `createAutomationCompletionPromptMessage`, `errorLogTag`, `existingMessages.slice`, `isAutomationCompletionPromptMessage`, `logger100.warn`, `this.injectedIds.add`, `this.injectedIds.has`, `this.innerExecutor.appendMessages`, `this.innerExecutor.clearMessages`, `this.innerExecutor.getMessages`, `this.isRenamedSpelling`, `this.source.drain`, `this.source.stageForCheckpoint`.

Assignment or increment targets: `completions`, `this.restoredInjectedIds`, `trailingUserStart`.

SHA-256 of the source span: `15564fd3f6f8813926e96ca0ef1b3982a93338bc12a72d96a84f584905344b9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
