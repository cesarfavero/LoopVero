# `toBoxDataRootPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-attachments.ts` · [Module README](../../../../../modules/core/email/email-attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734847-734850](../../../../../../reference/runtime/host-main.cjs#L734847-L734850) | `FunctionDeclaration` | no | `path33` |
| [evaluation:539272-539275](../../../../../../reference/runtime/sand-eval-runner.cjs#L539272-L539275) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734847-734850](../../../../../../reference/runtime/host-main.cjs#L734847-L734850) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539272-539275](../../../../../../reference/runtime/sand-eval-runner.cjs#L539272-L539275) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:734847

Calls written directly in this body: `path33.slice`, `path33.startsWith`.

SHA-256 of the source span: `8ff4db646b80ec3ef7349059ce81a75a5adadfdeabbe0c6d2599eb80e602b249`.

### evaluation:539272

Calls written directly in this body: `path33.slice`, `path33.startsWith`.

SHA-256 of the source span: `8ff4db646b80ec3ef7349059ce81a75a5adadfdeabbe0c6d2599eb80e602b249`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
