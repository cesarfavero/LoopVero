# `rethrowDocumentError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tasks/README.en.md).

**Module:** `core/tasks/task-tools.ts` · [Module README](../../../../../modules/core/tasks/task-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739478-739483](../../../../../../reference/runtime/host-main.cjs#L739478-L739483) | `FunctionDeclaration` | no | `error64` |
| [evaluation:538781-538786](../../../../../../reference/runtime/sand-eval-runner.cjs#L538781-L538786) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739478-739483](../../../../../../reference/runtime/host-main.cjs#L739478-L739483) | 1 | 0 | 0 | 0 | 2 | 0 |
| [evaluation:538781-538786](../../../../../../reference/runtime/sand-eval-runner.cjs#L538781-L538786) | 1 | 0 | 0 | 0 | 2 | 0 |

### host:739478

Calls written directly in this body: `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`, `error64`.

SHA-256 of the source span: `66e6a9f99a18b1cd797bfcf771dec8ed8e2e9e2769572a8605c9f3c76f8ec571`.

### evaluation:538781

Calls written directly in this body: `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`, `error63`.

SHA-256 of the source span: `5288b8ddccd5856e181834c3fee0d2be5334d618769dbac77799f334fe0f990d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
