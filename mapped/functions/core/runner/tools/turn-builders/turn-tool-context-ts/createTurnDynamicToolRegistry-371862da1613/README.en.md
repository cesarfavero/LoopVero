# `createTurnDynamicToolRegistry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/turn-tool-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569368-569380](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569368-L569380) | `FunctionDeclaration` | no | `decisions, {   compactConnectorCatalog,   keepsNativeToolsStatic = false }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569368-569380](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569368-L569380) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:569368

Calls written directly in this body: `compactConnectorCatalog`, `new DynamicToolRegistry`.

SHA-256 of the source span: `6172d5daa096b8acfb73993365d8c9bbca6bba7839e6a971f7c2cde8e50c21c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
