# `toolLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700690-700692](../../../../../../reference/runtime/host-main.cjs#L700690-L700692) | `FunctionDeclaration` | no | `tool` |
| [evaluation:514491-514493](../../../../../../reference/runtime/sand-eval-runner.cjs#L514491-L514493) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700690-700692](../../../../../../reference/runtime/host-main.cjs#L700690-L700692) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514491-514493](../../../../../../reference/runtime/sand-eval-runner.cjs#L514491-L514493) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700690

Calls written directly in this body: `brandLiteralEnum`, `brandPlaywrightTool`.

SHA-256 of the source span: `2268c8119529d697d21ff84daf3e9731b0232bbd1b7b2101eda8db4fc6039c7b`.

### evaluation:514491

Calls written directly in this body: `brandLiteralEnum`, `brandPlaywrightTool`.

SHA-256 of the source span: `2268c8119529d697d21ff84daf3e9731b0232bbd1b7b2101eda8db4fc6039c7b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
