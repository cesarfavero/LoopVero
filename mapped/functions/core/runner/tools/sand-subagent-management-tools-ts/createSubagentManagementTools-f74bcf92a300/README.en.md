# `createSubagentManagementTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781064-781142](../../../../../../../reference/runtime/host-main.cjs#L781064-L781142) | `FunctionDeclaration` | no | `controller, options2` |
| [evaluation:581411-581489](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581411-L581489) | `FunctionDeclaration` | no | `controller, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781064-781142](../../../../../../../reference/runtime/host-main.cjs#L781064-L781142) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581411-581489](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581411-L581489) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781064

Calls written directly in this body: `checkSubagentParameters`, `defineCommunicateTool`, `messageSubagentParameters`, `stopSubagentParameters`, `withSubagentIdAlias`.

SHA-256 of the source span: `a9bea62e685624d1dcff07a2c0d21f32e5b2c32b57949d6ccf9e142a9124b283`.

### evaluation:581411

Calls written directly in this body: `checkSubagentParameters`, `defineCommunicateTool`, `messageSubagentParameters`, `stopSubagentParameters`, `withSubagentIdAlias`.

SHA-256 of the source span: `a9bea62e685624d1dcff07a2c0d21f32e5b2c32b57949d6ccf9e142a9124b283`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
