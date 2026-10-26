# `sandMemoryWriteReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762654-762664](../../../../../../../reference/runtime/host-main.cjs#L762654-L762664) | `FunctionDeclaration` | no | `args, deps, outcome` |
| [evaluation:555264-555274](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555264-L555274) | `FunctionDeclaration` | no | `args, deps, outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762654-762664](../../../../../../../reference/runtime/host-main.cjs#L762654-L762664) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:555264-555274](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555264-L555274) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:762654

Calls written directly in this body: `memoryFactBytes`, `memoryScope`.

SHA-256 of the source span: `2c3759850456be1ea7dcf7c79ac7be9ef5fac0efe67472238ea6c4ee75815f9f`.

### evaluation:555264

Calls written directly in this body: `memoryFactBytes`, `memoryScope`.

SHA-256 of the source span: `2c3759850456be1ea7dcf7c79ac7be9ef5fac0efe67472238ea6c4ee75815f9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
