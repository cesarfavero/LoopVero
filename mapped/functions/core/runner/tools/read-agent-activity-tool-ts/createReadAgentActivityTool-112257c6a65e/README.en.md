# `createReadAgentActivityTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-agent-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-agent-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765440-765468](../../../../../../../reference/runtime/host-main.cjs#L765440-L765468) | `FunctionDeclaration` | no | `deps` |
| [evaluation:558807-558835](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558807-L558835) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765440-765468](../../../../../../../reference/runtime/host-main.cjs#L765440-L765468) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558807-558835](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558807-L558835) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765440

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `284adf221ac63675fa340717eae8934fa54ae06bf31f590ccf4f31ae7ee8c162`.

### evaluation:558807

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `284adf221ac63675fa340717eae8934fa54ae06bf31f590ccf4f31ae7ee8c162`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
