# `readPlaywrightTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767545-767553](../../../../../../../../reference/runtime/host-main.cjs#L767545-L767553) | `FunctionDeclaration` | yes | `ctx, exec2, windowIndex, toolName, args` |
| [evaluation:563062-563070](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563062-L563070) | `FunctionDeclaration` | yes | `ctx, exec2, windowIndex, toolName, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767545-767553](../../../../../../../../reference/runtime/host-main.cjs#L767545-L767553) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563062-563070](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563062-L563070) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767545

Calls written directly in this body: `playwrightBoxMcpServerName`, `readPlaywrightToolOn`.

SHA-256 of the source span: `b87c4bfacf17d4cc715b5f6af3b45b0652d372a4f987a27ae14dfda60d1582b0`.

### evaluation:563062

Calls written directly in this body: `playwrightBoxMcpServerName`, `readPlaywrightToolOn`.

SHA-256 of the source span: `b87c4bfacf17d4cc715b5f6af3b45b0652d372a4f987a27ae14dfda60d1582b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
