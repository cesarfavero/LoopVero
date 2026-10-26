# `isTimeout`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-operation-observation.ts` · [Module README](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776348-776350](../../../../../../../reference/runtime/host-main.cjs#L776348-L776350) | `FunctionDeclaration` | no | `error64` |
| [evaluation:576002-576004](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576002-L576004) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776348-776350](../../../../../../../reference/runtime/host-main.cjs#L776348-L776350) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576002-576004](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576002-L576004) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776348

Calls written directly in this body: `isFusedStepGuardTimeoutReason`.

SHA-256 of the source span: `04a5c73f8e2b61dd3626805a5782f205927c1e7691a2fca2170397a6b6f4a3ef`.

### evaluation:576002

Calls written directly in this body: `isFusedStepGuardTimeoutReason`.

SHA-256 of the source span: `2e51cb1f63c1c3c59da4f399f9e24c5f96d710ffca27985707fd47bf1658b768`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
