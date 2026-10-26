# `createSandComputerUseSubagentConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-computer-use-subagent.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-use-subagent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525187-525199](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525187-L525199) | `FunctionDeclaration` | no | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525187-525199](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525187-L525199) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525187

Calls written directly in this body: `computerUseSubagentDescription`, `new SubagentType`, `new SubagentTypeCustom`.

SHA-256 of the source span: `517c8e38ba1a54cebfba8ce7e31d4badb02ccb26d1bf669c08992731e064c0a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
