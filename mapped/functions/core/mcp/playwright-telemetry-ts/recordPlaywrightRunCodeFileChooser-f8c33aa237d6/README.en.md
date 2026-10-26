# `recordPlaywrightRunCodeFileChooser`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700462-700464](../../../../../../reference/runtime/host-main.cjs#L700462-L700464) | `FunctionDeclaration` | no | `ctx, args` |
| [evaluation:514251-514253](../../../../../../reference/runtime/sand-eval-runner.cjs#L514251-L514253) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700462-700464](../../../../../../reference/runtime/host-main.cjs#L700462-L700464) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:514251-514253](../../../../../../reference/runtime/sand-eval-runner.cjs#L514251-L514253) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:700462

Calls written directly in this body: `runCodeFileChoosers.increment`.

SHA-256 of the source span: `b7f7d25e69973d273fd67ba59664ca0e0d7d5e6f1ea2714ea5127ebd6ffb5762`.

### evaluation:514251

Calls written directly in this body: `runCodeFileChoosers.increment`.

SHA-256 of the source span: `b7f7d25e69973d273fd67ba59664ca0e0d7d5e6f1ea2714ea5127ebd6ffb5762`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
