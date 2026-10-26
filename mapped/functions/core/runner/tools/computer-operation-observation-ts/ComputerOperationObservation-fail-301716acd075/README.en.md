# `ComputerOperationObservation.fail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776235-776238](../../../../../../../reference/runtime/host-main.cjs#L776235-L776238) | `method` | no | `code` |
| [evaluation:575889-575892](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575889-L575892) | `method` | no | `code` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776235-776238](../../../../../../../reference/runtime/host-main.cjs#L776235-L776238) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575889-575892](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575889-L575892) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:776235

Calls written directly in this body: `computerOperationOutcomeOf`.

Assignment or increment targets: `this.code`, `this.outcome`.

SHA-256 of the source span: `3ffd66a102137d96f447f58d35d8d44b137f000a5aa014c10af3740d0bf727dc`.

### evaluation:575889

Calls written directly in this body: `computerOperationOutcomeOf`.

Assignment or increment targets: `this.code`, `this.outcome`.

SHA-256 of the source span: `3ffd66a102137d96f447f58d35d8d44b137f000a5aa014c10af3740d0bf727dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
