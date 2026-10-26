# `nonEmptyTuple`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762588-762594](../../../../../../../reference/runtime/host-main.cjs#L762588-L762594) | `FunctionDeclaration` | no | `items` |
| [evaluation:555198-555204](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555198-L555204) | `FunctionDeclaration` | no | `items` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762588-762594](../../../../../../../reference/runtime/host-main.cjs#L762588-L762594) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:555198-555204](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555198-L555204) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:762588

Calls written directly in this body: `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `bb6adb50ad353e3a3a83fe80c1b5c7be8861cc963cb1c2a9825fe33343939a09`.

### evaluation:555198

Calls written directly in this body: `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `bb6adb50ad353e3a3a83fe80c1b5c7be8861cc963cb1c2a9825fe33343939a09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
