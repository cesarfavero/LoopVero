# `userComputerUseSubagentDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/user-computer-use.ts` · [Module README](../../../../../../modules/core/runner/subagents/user-computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532347-532361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L532347-L532361) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532347-532361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L532347-L532361) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532347

Calls written directly in this body: `.join`, `backgroundSubagentLine`.

SHA-256 of the source span: `0353316d466aeb59a14ec25e9895c0b0483ec8c2f78203eda3958a82bafe0d5d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
