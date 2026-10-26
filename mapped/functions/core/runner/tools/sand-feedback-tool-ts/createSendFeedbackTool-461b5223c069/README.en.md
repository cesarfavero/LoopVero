# `createSendFeedbackTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-feedback-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-feedback-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765492-765562](../../../../../../../reference/runtime/host-main.cjs#L765492-L765562) | `FunctionDeclaration` | no | `deps` |
| [evaluation:558858-558928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558858-L558928) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765492-765562](../../../../../../../reference/runtime/host-main.cjs#L765492-L765562) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558858-558928](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558858-L558928) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765492

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `a3bc0e6f33b172c860e3c7da0823e97830859f13df0abd92532f3278c8519156`.

### evaluation:558858

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `a3bc0e6f33b172c860e3c7da0823e97830859f13df0abd92532f3278c8519156`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
