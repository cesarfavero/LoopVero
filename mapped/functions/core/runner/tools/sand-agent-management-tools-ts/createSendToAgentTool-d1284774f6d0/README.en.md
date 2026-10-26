# `createSendToAgentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757386-757433](../../../../../../../reference/runtime/host-main.cjs#L757386-L757433) | `FunctionDeclaration` | no | `deps` |
| [evaluation:543409-543456](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543409-L543456) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757386-757433](../../../../../../../reference/runtime/host-main.cjs#L757386-L757433) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:543409-543456](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543409-L543456) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:757386

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`, `describeSendToAgentTool`.

SHA-256 of the source span: `84d7db385344c12165b27cdc00930eaa29826675c62fa545757c08c6ac16af24`.

### evaluation:543409

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`, `describeSendToAgentTool`.

SHA-256 of the source span: `3051e9b6fb0a4f18de0838291c816c4f38f8326823b45a6ddab5d9ef2079cff8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
