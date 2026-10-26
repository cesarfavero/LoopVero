# `createSandTaskTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tasks/README.en.md).

**Module:** `core/tasks/task-tools.ts` · [Module README](../../../../../modules/core/tasks/task-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739513-739565](../../../../../../reference/runtime/host-main.cjs#L739513-L739565) | `FunctionDeclaration` | no | `tasks` |
| [evaluation:538816-538868](../../../../../../reference/runtime/sand-eval-runner.cjs#L538816-L538868) | `FunctionDeclaration` | no | `tasks` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739513-739565](../../../../../../reference/runtime/host-main.cjs#L739513-L739565) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538816-538868](../../../../../../reference/runtime/sand-eval-runner.cjs#L538816-L538868) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:739513

Calls written directly in this body: `.map`, `defineCommunicateTool`.

SHA-256 of the source span: `6ce497f83f8e2c7cdadba6fae5120b9e0eba7ba514f035d540a0ef3b60ba00fd`.

### evaluation:538816

Calls written directly in this body: `.map`, `defineCommunicateTool`.

SHA-256 of the source span: `9203fbbeae8fc2432bd5c4de96e3109b1f93ace363bbbcf5d86a6b9f830aecc4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
