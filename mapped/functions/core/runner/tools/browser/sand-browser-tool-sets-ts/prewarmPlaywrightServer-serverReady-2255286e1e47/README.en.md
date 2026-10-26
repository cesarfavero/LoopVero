# `prewarmPlaywrightServer/serverReady`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751522-751528](../../../../../../../../reference/runtime/host-main.cjs#L751522-L751528) | `ArrowFunctionExpression` | no | `outcome` |
| [evaluation:524373-524379](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524373-L524379) | `ArrowFunctionExpression` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751522-751528](../../../../../../../../reference/runtime/host-main.cjs#L751522-L751528) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:524373-524379](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524373-L524379) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:751522

Calls written directly in this body: `performance.now`, `recordPlaywrightServerReady`.

SHA-256 of the source span: `3051a7e271155a8b2d30229899db1b0b60cab8ecd3b1ac36935ffe8edade44cb`.

### evaluation:524373

Calls written directly in this body: `performance.now`, `recordPlaywrightServerReady`.

SHA-256 of the source span: `3051a7e271155a8b2d30229899db1b0b60cab8ecd3b1ac36935ffe8edade44cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
