# `boxBrowserWindowDeps/getWindowIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751476-751483](../../../../../../../../reference/runtime/host-main.cjs#L751476-L751483) | `ArrowFunctionExpression` | yes | `ctx` |
| [evaluation:524327-524334](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524327-L524334) | `ArrowFunctionExpression` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751476-751483](../../../../../../../../reference/runtime/host-main.cjs#L751476-L751483) | 0 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:524327-524334](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524327-L524334) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:751476

Calls written directly in this body: `boxAgentWindowIndex`, `host.playwright.waitForPreparedChrome`, `host.remoteBox.ensureReady`, `host.resolveBoxId`, `withSandBoxTouchReason`.

SHA-256 of the source span: `0b9ca882080e382a55601582d8c9d9155e0e7b88862cb1fa96be0f0ada1de09c`.

### evaluation:524327

Calls written directly in this body: `boxAgentWindowIndex`, `host.playwright.waitForPreparedChrome`, `host.remoteBox.ensureReady`, `host.resolveBoxId`, `withSandBoxTouchReason`.

SHA-256 of the source span: `0b9ca882080e382a55601582d8c9d9155e0e7b88862cb1fa96be0f0ada1de09c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
