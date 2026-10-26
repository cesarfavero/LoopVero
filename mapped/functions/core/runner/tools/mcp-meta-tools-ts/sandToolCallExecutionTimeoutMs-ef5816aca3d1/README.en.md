# `sandToolCallExecutionTimeoutMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761831-761836](../../../../../../../reference/runtime/host-main.cjs#L761831-L761836) | `FunctionDeclaration` | no | `toolName, isComputerUseSubagent, subagentToolTimeoutMs` |
| [evaluation:554097-554102](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554097-L554102) | `FunctionDeclaration` | no | `toolName, isComputerUseSubagent, subagentToolTimeoutMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761831-761836](../../../../../../../reference/runtime/host-main.cjs#L761831-L761836) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554097-554102](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554097-L554102) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:761831

Calls written directly in this body: `isSubagentToolName`, `toolCallExecutionGuardMs`.

SHA-256 of the source span: `5921ceec8fc91d01e30cb02d1efc575181f40a5b09eed8a2aa761c733fd838d2`.

### evaluation:554097

Calls written directly in this body: `isSubagentToolName`, `toolCallExecutionGuardMs`.

SHA-256 of the source span: `5921ceec8fc91d01e30cb02d1efc575181f40a5b09eed8a2aa761c733fd838d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
