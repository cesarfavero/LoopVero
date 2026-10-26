# `buildCommunicateTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725125-725259](../../../../../../../reference/runtime/host-main.cjs#L725125-L725259) | `FunctionDeclaration` | no | `deps, spec, schemas` |
| [evaluation:480096-480230](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480096-L480230) | `FunctionDeclaration` | no | `deps, spec, schemas` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725125-725259](../../../../../../../reference/runtime/host-main.cjs#L725125-L725259) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480096-480230](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480096-L480230) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:725125

Calls written directly in this body: `createZodAgentTool`, `makeRender`, `observingArgsRejections`, `toolCallWrapper`, `withSafeParsedArgs`.

SHA-256 of the source span: `8cfb7017956016a1e6e839be27230a226abeeeb64a0bcf6caeb8d1631ea0ba5a`.

### evaluation:480096

Calls written directly in this body: `createZodAgentTool`, `makeRender`, `observingArgsRejections`, `toolCallWrapper`, `withSafeParsedArgs`.

SHA-256 of the source span: `e4e17068fd3bfaa480b64f43c5009c2703d0264f6dd5abeb53658563debd5cad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
