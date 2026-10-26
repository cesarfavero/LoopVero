# `recordPlaywrightSnapshotRecovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:514289-514291](../../../../../../reference/runtime/sand-eval-runner.cjs#L514289-L514291) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:514289-514291](../../../../../../reference/runtime/sand-eval-runner.cjs#L514289-L514291) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:514289

Calls written directly in this body: `snapshotRecoveries.increment`.

SHA-256 of the source span: `9f5ff90dd20e200988d2f27530b5e228ff72ad41d70775a1c9b836c15622522d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
