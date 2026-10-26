# `rowTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751078-751445](../../../../../../../reference/runtime/host-main.cjs#L751078-L751445) | `FunctionDeclaration` | no | `deps, row, lastPageUrl, treatment, exposeArm` |
| [evaluation:523929-524296](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523929-L524296) | `FunctionDeclaration` | no | `deps, row, lastPageUrl, treatment, exposeArm` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751078-751445](../../../../../../../reference/runtime/host-main.cjs#L751078-L751445) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523929-524296](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523929-L524296) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751078

Calls written directly in this body: `new McpToolCall`, `new ToolCall`, `toolFor`, `withPlaywrightBoxTimingStripped`, `withSafeParsedArgs`.

SHA-256 of the source span: `ee6a855f4acd23908d4b607b0e6e26cfcad6a0332abc9d30470bdf1a9e61a1c9`.

### evaluation:523929

Calls written directly in this body: `new McpToolCall`, `new ToolCall`, `toolFor`, `withPlaywrightBoxTimingStripped`, `withSafeParsedArgs`.

SHA-256 of the source span: `74ded86ac54c4e1608cf3682365649a15c08febb47d509aa70040af3591dc1c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
