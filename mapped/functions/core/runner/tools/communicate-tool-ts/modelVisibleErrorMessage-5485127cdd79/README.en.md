# `modelVisibleErrorMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725067-725071](../../../../../../../reference/runtime/host-main.cjs#L725067-L725071) | `FunctionDeclaration` | no | `ctx, toolName, error64, infrastructureErrorMessage` |
| [evaluation:480038-480042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480038-L480042) | `FunctionDeclaration` | no | `ctx, toolName, error63, infrastructureErrorMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725067-725071](../../../../../../../reference/runtime/host-main.cjs#L725067-L725071) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480038-480042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480038-L480042) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:725067

Calls written directly in this body: `classifyToolError`, `errorMessageWithErrorDetailsReason`, `recordToolCallError`.

SHA-256 of the source span: `ff78ef9badd1d8e43991cef75fd294d5a5cd6878095ea2ee92533af98d66b790`.

### evaluation:480038

Calls written directly in this body: `classifyToolError`, `errorMessageWithErrorDetailsReason`, `recordToolCallError`.

SHA-256 of the source span: `d1bc2a9554c2823ccbd4c64b791e629606046adcce723de8595caa9bd4df3e16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
