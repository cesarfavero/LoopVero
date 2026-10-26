# `sendOp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777961-777975](../../../../../../../reference/runtime/host-main.cjs#L777961-L777975) | `FunctionDeclaration` | no | `args` |
| [evaluation:577696-577710](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577696-L577710) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777961-777975](../../../../../../../reference/runtime/host-main.cjs#L777961-L777975) | 4 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:577696-577710](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577696-L577710) | 4 | 0 | 0 | 2 | 2 | 0 |

### host:777961

Calls written directly in this body: `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `7724d6bfbde7f06e8e9a1dc06146d25aba7c35a190ff2536877d5fa137621810`.

### evaluation:577696

Calls written directly in this body: `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `7724d6bfbde7f06e8e9a1dc06146d25aba7c35a190ff2536877d5fa137621810`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
