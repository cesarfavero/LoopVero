# `isSandBoxCallUndelivered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/box.ts` · [Module README](../../../../../modules/core/ports/box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:475762-475764](../../../../../../reference/runtime/sand-eval-runner.cjs#L475762-L475764) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475762-475764](../../../../../../reference/runtime/sand-eval-runner.cjs#L475762-L475764) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:475762

Calls written directly in this body: `ConnectError.from`, `isSandBoxProxyNotFound`, `wasRefusedBeforeConnecting`.

SHA-256 of the source span: `03ec7bec0ec99a31241fa456ae791effe798ab5e85e07aac62bab72a063a1f55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
