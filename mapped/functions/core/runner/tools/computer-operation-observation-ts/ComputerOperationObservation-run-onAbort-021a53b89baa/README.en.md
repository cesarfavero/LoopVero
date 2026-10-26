# `ComputerOperationObservation.run/onAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776317-776320](../../../../../../../reference/runtime/host-main.cjs#L776317-L776320) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:575971-575974](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575971-L575974) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776317-776320](../../../../../../../reference/runtime/host-main.cjs#L776317-L776320) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575971-575974](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575971-L575974) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:776317

Calls written directly in this body: `isTimeout`, `this.fail`, `this.finish`.

SHA-256 of the source span: `180274bd6997c8a607c5fbdebca8b558356a3d7beb6651d28e57e11a7181f803`.

### evaluation:575971

Calls written directly in this body: `isTimeout`, `this.fail`, `this.finish`.

SHA-256 of the source span: `180274bd6997c8a607c5fbdebca8b558356a3d7beb6651d28e57e11a7181f803`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
