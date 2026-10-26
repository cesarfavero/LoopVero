# `taskEditOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tasks/README.en.md).

**Module:** `core/tasks/task-tools.ts` · [Module README](../../../../../modules/core/tasks/task-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739484-739503](../../../../../../reference/runtime/host-main.cjs#L739484-L739503) | `FunctionDeclaration` | no | `args` |
| [evaluation:538787-538806](../../../../../../reference/runtime/sand-eval-runner.cjs#L538787-L538806) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739484-739503](../../../../../../reference/runtime/host-main.cjs#L739484-L739503) | 8 | 0 | 0 | 3 | 1 | 0 |
| [evaluation:538787-538806](../../../../../../reference/runtime/sand-eval-runner.cjs#L538787-L538806) | 8 | 0 | 0 | 3 | 1 | 0 |

### host:739484

Calls written directly in this body: `.filter`, `Object.keys`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `c02c1c5d589787e801c863223aeba072116c60b8179b16b1c8c4fc3b86e4566a`.

### evaluation:538787

Calls written directly in this body: `.filter`, `Object.keys`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `c02c1c5d589787e801c863223aeba072116c60b8179b16b1c8c4fc3b86e4566a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
