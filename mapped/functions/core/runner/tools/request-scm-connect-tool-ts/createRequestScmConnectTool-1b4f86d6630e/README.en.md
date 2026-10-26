# `createRequestScmConnectTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-scm-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-scm-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776648-776685](../../../../../../../reference/runtime/host-main.cjs#L776648-L776685) | `FunctionDeclaration` | no | `deps` |
| [evaluation:576299-576336](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576299-L576336) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776648-776685](../../../../../../../reference/runtime/host-main.cjs#L776648-L776685) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576299-576336](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576299-L576336) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776648

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`, `new Set`.

SHA-256 of the source span: `df37617d7decb4f255b26dd7e2c0a07d80e7fa1680e62afe59b2f6fa8415dfe9`.

### evaluation:576299

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`, `new Set`.

SHA-256 of the source span: `df37617d7decb4f255b26dd7e2c0a07d80e7fa1680e62afe59b2f6fa8415dfe9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
