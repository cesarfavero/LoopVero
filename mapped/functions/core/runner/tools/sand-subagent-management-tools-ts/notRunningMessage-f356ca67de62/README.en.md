# `notRunningMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780855-780861](../../../../../../../reference/runtime/host-main.cjs#L780855-L780861) | `FunctionDeclaration` | no | `subagentId, running` |
| [evaluation:581202-581208](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581202-L581208) | `FunctionDeclaration` | no | `subagentId, running` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780855-780861](../../../../../../../reference/runtime/host-main.cjs#L780855-L780861) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581202-581208](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581202-L581208) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:780855

Calls written directly in this body: `.join`, `running.map`.

SHA-256 of the source span: `59f0763388e1a4ef307eeae72072f46771ac602db5028a4976c9b8b1d33b1fc4`.

### evaluation:581202

Calls written directly in this body: `.join`, `running.map`.

SHA-256 of the source span: `59f0763388e1a4ef307eeae72072f46771ac602db5028a4976c9b8b1d33b1fc4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
