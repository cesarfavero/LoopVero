# `anchoredSettingsRow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557624-557630](../../../../../../reference/runtime/host-main.cjs#L557624-L557630) | `FunctionDeclaration` | no | `row, section` |
| [evaluation:546071-546077](../../../../../../reference/runtime/sand-eval-runner.cjs#L546071-L546077) | `FunctionDeclaration` | no | `row, section` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557624-557630](../../../../../../reference/runtime/host-main.cjs#L557624-L557630) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:546071-546077](../../../../../../reference/runtime/sand-eval-runner.cjs#L546071-L546077) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:557624

Calls written directly in this body: `isSandSettingsAnchorId`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `ce804d65554a0329d5bb421f83f73b420f90c84a73092e01f6d5c309fb0eefdf`.

### evaluation:546071

Calls written directly in this body: `isSandSettingsAnchorId`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `ce804d65554a0329d5bb421f83f73b420f90c84a73092e01f6d5c309fb0eefdf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
