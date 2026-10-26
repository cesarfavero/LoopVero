# `offersUserComputerUseSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/user-computer-use.ts` · [Module README](../../../../../../modules/core/runner/subagents/user-computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532344-532346](../../../../../../../reference/runtime/sand-eval-runner.cjs#L532344-L532346) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532344-532346](../../../../../../../reference/runtime/sand-eval-runner.cjs#L532344-L532346) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532344

Calls written directly in this body: `host.gates.localComputerUse`, `offersShellUserComputer`.

SHA-256 of the source span: `d3adc2db98f0d33c7f1d193dae1dec394431328cab126c124f72f8c7211e4c56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
