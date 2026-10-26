# `isUserComputerUseSubagentType`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/user-computer-use.ts` · [Module README](../../../../../../modules/core/runner/subagents/user-computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:753698-753700](../../../../../../../reference/runtime/host-main.cjs#L753698-L753700) | `FunctionDeclaration` | no | `subagentType` |
| [evaluation:532341-532343](../../../../../../../reference/runtime/sand-eval-runner.cjs#L532341-L532343) | `FunctionDeclaration` | no | `subagentType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:753698-753700](../../../../../../../reference/runtime/host-main.cjs#L753698-L753700) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:532341-532343](../../../../../../../reference/runtime/sand-eval-runner.cjs#L532341-L532343) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:753698

Calls written directly in this body: `isBuiltinSubagent`.

SHA-256 of the source span: `d9087bfe32d25f5b7a0fe5a7d36247071fdf1db280993f2a22c08539ce2a194c`.

### evaluation:532341

Calls written directly in this body: `isBuiltinSubagent`.

SHA-256 of the source span: `d9087bfe32d25f5b7a0fe5a7d36247071fdf1db280993f2a22c08539ce2a194c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
