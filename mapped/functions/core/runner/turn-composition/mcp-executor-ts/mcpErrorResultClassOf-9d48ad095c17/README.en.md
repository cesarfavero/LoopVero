# `mcpErrorResultClassOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585880-585883](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585880-L585883) | `FunctionDeclaration` | no | `error63, recordedClass` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585880-585883](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585880-L585883) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585880

Calls written directly in this body: `isMcpAuthErrorMessage`.

SHA-256 of the source span: `782121d22b850d7d9b53a7d6291de385951a67201b7abd158a21c5471a0f65eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
