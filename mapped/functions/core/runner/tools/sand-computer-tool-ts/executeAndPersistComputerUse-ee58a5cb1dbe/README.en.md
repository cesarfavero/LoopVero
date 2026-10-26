# `executeAndPersistComputerUse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777286-777339](../../../../../../../reference/runtime/host-main.cjs#L777286-L777339) | `FunctionDeclaration` | yes | `ctx, resourceAccessor, deps, args` |
| [evaluation:576931-576984](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576931-L576984) | `FunctionDeclaration` | yes | `ctx, resourceAccessor, deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777286-777339](../../../../../../../reference/runtime/host-main.cjs#L777286-L777339) | 5 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:576931-576984](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576931-L576984) | 5 | 0 | 2 | 1 | 0 | 0 |

### host:777286

Calls written directly in this body: `args.clone`, `ctx.get`, `deps.fullResolutionScreenshots`, `observation.executorResult`, `resourceAccessor.get`, `sandComputerStageSpanName`, `takeFullResolutionScreenshot`, `traceComputerUseSpan`.

Assignment or increment targets: `observation.stage`, `request5.fullResolutionScreenshot`.

SHA-256 of the source span: `001807ee68fcb6a3398f0ac19e25f6dc5670653c372b8a935672cf76e9b5c407`.

### evaluation:576931

Calls written directly in this body: `args.clone`, `ctx.get`, `deps.fullResolutionScreenshots`, `observation.executorResult`, `resourceAccessor.get`, `sandComputerStageSpanName`, `takeFullResolutionScreenshot`, `traceComputerUseSpan`.

Assignment or increment targets: `observation.stage`, `request3.fullResolutionScreenshot`.

SHA-256 of the source span: `197333c6646a7925cef24c080219ec36422a971acc4bde2e031ac1deb7befa52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
