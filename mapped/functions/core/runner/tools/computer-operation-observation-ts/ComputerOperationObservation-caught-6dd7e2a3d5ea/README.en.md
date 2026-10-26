# `ComputerOperationObservation.caught`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776250-776271](../../../../../../../reference/runtime/host-main.cjs#L776250-L776271) | `method` | no | `error64` |
| [evaluation:575904-575925](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575904-L575925) | `method` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776250-776271](../../../../../../../reference/runtime/host-main.cjs#L776250-L776271) | 11 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575904-575925](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575904-L575925) | 11 | 0 | 0 | 0 | 0 | 0 |

### host:776250

Calls written directly in this body: `isTimeout`, `this.fail`.

Assignment or increment targets: `code`.

SHA-256 of the source span: `f230b0c96ce4074263f2bfd26e807340b727cd0ee4e9ccf1163cf8547b0a49a0`.

### evaluation:575904

Calls written directly in this body: `isTimeout`, `this.fail`.

Assignment or increment targets: `code`.

SHA-256 of the source span: `4dc02347394ee678d06d8c51cce671bd23cc72ad4dc1e7a1cf8d33dd5438dfc8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
