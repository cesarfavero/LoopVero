# `createSandBrowserOpRunner/sensitiveRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726814-726891](../../../../../../../reference/runtime/host-main.cjs#L726814-L726891) | `ArrowFunctionExpression` | yes | `ctx, encoded, op` |
| [evaluation:561429-561506](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561429-L561506) | `ArrowFunctionExpression` | yes | `ctx, encoded, op` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726814-726891](../../../../../../../reference/runtime/host-main.cjs#L726814-L726891) | 13 | 1 | 4 | 6 | 0 | 0 |
| [evaluation:561429-561506](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561429-L561506) | 13 | 1 | 4 | 6 | 0 | 0 |

### host:726814

Calls written directly in this body: `.execute`, `Date.now`, `deps.agentBox.downloadFile.bind`, `deps.resourceAccessor.get`, `downloadTerminal`, `new BackgroundShellSpawnArgs`, `new WriteShellStdinArgs`, `parseDriverResponse`, `parseShellTerminalFooter`.

SHA-256 of the source span: `04d7108638ddfc194ddc2ff6e52ec6ab181bfb77477724ef0ba8e82507355696`.

### evaluation:561429

Calls written directly in this body: `.execute`, `Date.now`, `deps.agentBox.downloadFile.bind`, `deps.resourceAccessor.get`, `downloadTerminal`, `new BackgroundShellSpawnArgs`, `new WriteShellStdinArgs`, `parseDriverResponse`, `parseShellTerminalFooter`.

SHA-256 of the source span: `94408609373078d595545f40051cdb85925a10f61c444b2813474ddee317d152`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
