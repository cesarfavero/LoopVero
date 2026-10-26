# `ComputerOperationObservation.admitted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776224-776234](../../../../../../../reference/runtime/host-main.cjs#L776224-L776234) | `method` | no | `actions2` |
| [evaluation:575878-575888](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575878-L575888) | `method` | no | `actions2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776224-776234](../../../../../../../reference/runtime/host-main.cjs#L776224-L776234) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575878-575888](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575878-L575888) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:776224

Calls written directly in this body: `actions2.reduce`, `this.options.span.setAttributes`.

Assignment or increment targets: `this.action`, `this.actionMask`, `this.batchLength`, `this.stage`.

SHA-256 of the source span: `09d55889228b24b967fa30cd2a83aed3d2452c2b51dda68f3d22bd2a42e90b15`.

### evaluation:575878

Calls written directly in this body: `actions2.reduce`, `this.options.span.setAttributes`.

Assignment or increment targets: `this.action`, `this.actionMask`, `this.batchLength`, `this.stage`.

SHA-256 of the source span: `09d55889228b24b967fa30cd2a83aed3d2452c2b51dda68f3d22bd2a42e90b15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
