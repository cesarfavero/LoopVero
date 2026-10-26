# `createBackgroundWatches/watchCloudAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490560-490618](../../../../../../reference/runtime/sand-eval-runner.cjs#L490560-L490618) | `ArrowFunctionExpression` | no | `bcId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490560-490618](../../../../../../reference/runtime/sand-eval-runner.cjs#L490560-L490618) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:490560

Calls written directly in this body: `.catch`, `.finally`, `.then`, `Date.now`, `asyncTaskFallbackLabel`, `bcId.trim`, `cloudAgentSettlements.set`, `definedProvenance`, `host.cloudAgentWatcher`, `host.getConversationId`, `host.pendingWakeArmedHandler`, `watchStartedBy`, `watchedCloudAgentBcIds.has`, `watchedCloudAgentBcIds.set`, `watcher.awaitCompletion`.

SHA-256 of the source span: `2c029f4d93f8a76942b039c004d86ce3f267718a36657df6c913ee36a81caf55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
