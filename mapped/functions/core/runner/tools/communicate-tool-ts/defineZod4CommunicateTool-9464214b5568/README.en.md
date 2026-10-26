# `defineZod4CommunicateTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725113-725124](../../../../../../../reference/runtime/host-main.cjs#L725113-L725124) | `FunctionDeclaration` | no | `deps, spec` |
| [evaluation:480084-480095](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480084-L480095) | `FunctionDeclaration` | no | `deps, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725113-725124](../../../../../../../reference/runtime/host-main.cjs#L725113-L725124) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480084-480095](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480084-L480095) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725113

Calls written directly in this body: `buildCommunicateTool`, `preprocess`.

SHA-256 of the source span: `bf45951a19cc193c2d9a3b855437d41a91114aad629d27f79d537eb63975a6e6`.

### evaluation:480084

Calls written directly in this body: `buildCommunicateTool`, `preprocess`.

SHA-256 of the source span: `bf45951a19cc193c2d9a3b855437d41a91114aad629d27f79d537eb63975a6e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
