# `readPlaywrightCurrentTab`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767563-767568](../../../../../../../../reference/runtime/host-main.cjs#L767563-L767568) | `FunctionDeclaration` | yes | `ctx, exec2, windowIndex` |
| [evaluation:563080-563085](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563080-L563085) | `FunctionDeclaration` | yes | `ctx, exec2, windowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767563-767568](../../../../../../../../reference/runtime/host-main.cjs#L767563-L767568) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563080-563085](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563080-L563085) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767563

Calls written directly in this body: `mapRead`, `readPlaywrightTool`.

SHA-256 of the source span: `7bb323bfb0f2f5c2674c8b0283219f3e2e732e349ac07f0267a9b2067bcb0a43`.

### evaluation:563080

Calls written directly in this body: `mapRead`, `readPlaywrightTool`.

SHA-256 of the source span: `7bb323bfb0f2f5c2674c8b0283219f3e2e732e349ac07f0267a9b2067bcb0a43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
