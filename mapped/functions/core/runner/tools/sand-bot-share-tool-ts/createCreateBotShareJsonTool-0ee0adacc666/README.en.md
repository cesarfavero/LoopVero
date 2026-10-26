# `createCreateBotShareJsonTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-bot-share-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771198-771245](../../../../../../../reference/runtime/host-main.cjs#L771198-L771245) | `FunctionDeclaration` | no | `deps` |
| [evaluation:570432-570479](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570432-L570479) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771198-771245](../../../../../../../reference/runtime/host-main.cjs#L771198-L771245) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570432-570479](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570432-L570479) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771198

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `bc6bcd6dc30872cad1667fa8d0bd72779ac7586f3a725b70850dada295c72162`.

### evaluation:570432

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `e00f8a6b5acbe48e28598777800d2673aedc31c1165cdc350657b83327a7d246`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
