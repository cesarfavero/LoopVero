# `isComputerUseSubagentType`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-computer-use-subagent.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-use-subagent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752066-752068](../../../../../../../reference/runtime/host-main.cjs#L752066-L752068) | `FunctionDeclaration` | no | `subagentType` |
| [evaluation:525133-525135](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525133-L525135) | `FunctionDeclaration` | no | `subagentType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752066-752068](../../../../../../../reference/runtime/host-main.cjs#L752066-L752068) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:525133-525135](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525133-L525135) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752066

Calls written directly in this body: `isBuiltinSubagent`.

SHA-256 of the source span: `13d0a6435be66b57bdd9ed032128d31344191f35ed70eadceca67f661123c29a`.

### evaluation:525133

Calls written directly in this body: `isBuiltinSubagent`.

SHA-256 of the source span: `13d0a6435be66b57bdd9ed032128d31344191f35ed70eadceca67f661123c29a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
