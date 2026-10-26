# `createReactToSlackMessageTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-slack-reaction-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-slack-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768207-768229](../../../../../../../reference/runtime/host-main.cjs#L768207-L768229) | `FunctionDeclaration` | no | `reaction` |
| [evaluation:563723-563745](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563723-L563745) | `FunctionDeclaration` | no | `reaction` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768207-768229](../../../../../../../reference/runtime/host-main.cjs#L768207-L768229) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563723-563745](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563723-L563745) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768207

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `3f1d0b756494c947b177fd294430fedc026c6f999df63b0bb2d1529831de9d16`.

### evaluation:563723

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `3f1d0b756494c947b177fd294430fedc026c6f999df63b0bb2d1529831de9d16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
