# `resolveSandSubagentModelId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tasks/README.en.md).

**Module:** `core/sand-multitask.ts` · [Module README](../../../../modules/core/sand-multitask-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530219-530229](../../../../../reference/runtime/sand-eval-runner.cjs#L530219-L530229) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530219-530229](../../../../../reference/runtime/sand-eval-runner.cjs#L530219-L530229) | 5 | 0 | 0 | 5 | 0 | 0 |

### evaluation:530219

Calls written directly in this body: `EXECUTOR_PROFILE_NAME_PATTERN.test`, `args.executorProfileNames.has`.

SHA-256 of the source span: `c424640596014149003bb642c006773b9d5b0470b24d2ca6d983d58fdc28c2e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
