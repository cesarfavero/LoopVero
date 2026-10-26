# `ComputerOperationObservation.executorResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776239-776249](../../../../../../../reference/runtime/host-main.cjs#L776239-L776249) | `method` | no | `result` |
| [evaluation:575893-575903](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575893-L575903) | `method` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776239-776249](../../../../../../../reference/runtime/host-main.cjs#L776239-L776249) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575893-575903](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575893-L575903) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:776239

Calls written directly in this body: `this.fail`.

Assignment or increment targets: `this.stage`.

SHA-256 of the source span: `acd938b6a1ff348398388cccc9d865a8e9dfc4ea5d6642c14f625a7e37938357`.

### evaluation:575893

Calls written directly in this body: `this.fail`.

Assignment or increment targets: `this.stage`.

SHA-256 of the source span: `acd938b6a1ff348398388cccc9d865a8e9dfc4ea5d6642c14f625a7e37938357`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
