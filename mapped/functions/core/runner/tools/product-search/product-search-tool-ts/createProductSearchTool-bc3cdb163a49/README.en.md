# `createProductSearchTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/product-search/product-search-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/product-search/product-search-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781972-782007](../../../../../../../../reference/runtime/host-main.cjs#L781972-L782007) | `FunctionDeclaration` | no | `port, options2 = {}` |
| [evaluation:582317-582352](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582317-L582352) | `FunctionDeclaration` | no | `port, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781972-782007](../../../../../../../../reference/runtime/host-main.cjs#L781972-L782007) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582317-582352](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582317-L582352) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781972

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `85125761df7b594264ad7a25f6524e6db26cba8e81a9f993431c5b05ee123564`.

### evaluation:582317

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `75315c8db6e8ff65cf2f86ef6b58ec598f9b2558d19bd416080bdfac12bc879b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
