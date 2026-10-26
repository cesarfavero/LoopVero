# `playwrightToolErrorReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700364-700366](../../../../../../reference/runtime/host-main.cjs#L700364-L700366) | `FunctionDeclaration` | no | `text3` |
| [evaluation:514153-514155](../../../../../../reference/runtime/sand-eval-runner.cjs#L514153-L514155) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700364-700366](../../../../../../reference/runtime/host-main.cjs#L700364-L700366) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514153-514155](../../../../../../reference/runtime/sand-eval-runner.cjs#L514153-L514155) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700364

Calls written directly in this body: `TOOL_ERROR_REASON_PATTERNS.find`.

SHA-256 of the source span: `583520a28ddb3ebdcb98d3ba3ea597869485593520fc2d1eb2c2f5a826e2df11`.

### evaluation:514153

Calls written directly in this body: `TOOL_ERROR_REASON_PATTERNS.find`.

SHA-256 of the source span: `583520a28ddb3ebdcb98d3ba3ea597869485593520fc2d1eb2c2f5a826e2df11`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
