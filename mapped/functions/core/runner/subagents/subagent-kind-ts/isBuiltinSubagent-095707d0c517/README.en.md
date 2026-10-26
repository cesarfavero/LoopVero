# `isBuiltinSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-kind.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740866-740870](../../../../../../../reference/runtime/host-main.cjs#L740866-L740870) | `FunctionDeclaration` | no | `subagentType, ...names3` |
| [evaluation:479773-479777](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479773-L479777) | `FunctionDeclaration` | no | `subagentType, ...names3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740866-740870](../../../../../../../reference/runtime/host-main.cjs#L740866-L740870) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:479773-479777](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479773-L479777) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:740866

Calls written directly in this body: `names3.includes`, `subagentKind`.

SHA-256 of the source span: `b827b770c17b0c24bb1ed77adb84f0f55ffebff12c67f10b5d39eccd8e90e14d`.

### evaluation:479773

Calls written directly in this body: `names3.includes`, `subagentKind`.

SHA-256 of the source span: `b827b770c17b0c24bb1ed77adb84f0f55ffebff12c67f10b5d39eccd8e90e14d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
