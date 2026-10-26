# `sandTaskDescriptionBase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/sand-task-tool.ts` · [Module README](../../../../../../modules/core/runner/subagents/sand-task-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763489-763492](../../../../../../../reference/runtime/host-main.cjs#L763489-L763492) | `FunctionDeclaration` | no | `toolName, executorForked` |
| [evaluation:556531-556534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556531-L556534) | `FunctionDeclaration` | no | `toolName, executorForked` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763489-763492](../../../../../../../reference/runtime/host-main.cjs#L763489-L763492) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556531-556534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556531-L556534) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:763489

Calls written directly in this body: `.join`.

SHA-256 of the source span: `d374d402b8efe747e1a19e6045b2a917c9e4efd83063e0502f89784b70a5b630`.

### evaluation:556531

Calls written directly in this body: `.join`.

SHA-256 of the source span: `d374d402b8efe747e1a19e6045b2a917c9e4efd83063e0502f89784b70a5b630`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
