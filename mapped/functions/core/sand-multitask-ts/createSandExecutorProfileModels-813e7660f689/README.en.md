# `createSandExecutorProfileModels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tasks/README.en.md).

**Module:** `core/sand-multitask.ts` · [Module README](../../../../modules/core/sand-multitask-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530201-530218](../../../../../reference/runtime/sand-eval-runner.cjs#L530201-L530218) | `FunctionDeclaration` | no | `config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530201-530218](../../../../../reference/runtime/sand-eval-runner.cjs#L530201-L530218) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:530201

Calls written directly in this body: `.join`, `Object.fromEntries`, `config2.profiles.map`, `createSubagentModels`.

SHA-256 of the source span: `02e4795f650d24be327f8282083d5a9d7c38ca20df2b761f1bfa13256367f1a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
