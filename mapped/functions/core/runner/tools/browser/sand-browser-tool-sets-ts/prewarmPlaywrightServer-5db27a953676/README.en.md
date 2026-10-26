# `prewarmPlaywrightServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751520-751580](../../../../../../../../reference/runtime/host-main.cjs#L751520-L751580) | `FunctionDeclaration` | yes | `args` |
| [evaluation:524371-524431](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524371-L524431) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751520-751580](../../../../../../../../reference/runtime/host-main.cjs#L751520-L751580) | 5 | 1 | 5 | 3 | 1 | 1 |
| [evaluation:524371-524431](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524371-L524431) | 5 | 1 | 5 | 3 | 1 | 1 |

### host:751520

Calls written directly in this body: `args.attachBoxServers`, `args.prepareChrome`, `boxAgentWindowIndex`, `createBoxSandMcpExec`, `listServer`, `performance.now`, `playwrightBoxMcpServerName`, `playwrightServerStatusClass`, `reportHostDiagnostic`, `serverReady`, `waitBeforeRecheck`.

Assignment or increment targets: `listToolsStartedAt`, `recheck`, `server`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `2a36f6fe9f1f35d0984fb8f9dac249949602bf86a157009f97281557250c1a22`.

### evaluation:524371

Calls written directly in this body: `args.attachBoxServers`, `args.prepareChrome`, `boxAgentWindowIndex`, `createBoxSandMcpExec`, `listServer`, `performance.now`, `playwrightBoxMcpServerName`, `playwrightServerStatusClass`, `reportHostDiagnostic`, `serverReady`, `waitBeforeRecheck`.

Assignment or increment targets: `listToolsStartedAt`, `recheck`, `server`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `7690c7e468624ece9fd5df108f8b400ba24b9ae6aef7cca785c3b26f0e25fd79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
