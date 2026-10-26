# `classifySecureFillWriteFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-write-failure.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-write-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724155-724165](../../../../../../../../reference/runtime/host-main.cjs#L724155-L724165) | `FunctionDeclaration` | no | `driverError` |
| [evaluation:560049-560059](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560049-L560059) | `FunctionDeclaration` | no | `driverError` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724155-724165](../../../../../../../../reference/runtime/host-main.cjs#L724155-L724165) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:560049-560059](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560049-L560059) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:724155

Calls written directly in this body: `PLAYWRIGHT_ERROR.exec`, `causeIn`, `isDriverCall`, `isErrorName`.

SHA-256 of the source span: `1b6f815cec78155698d698479faf3f6f6fe2eec0b659eb42510e67708d4417aa`.

### evaluation:560049

Calls written directly in this body: `PLAYWRIGHT_ERROR.exec`, `causeIn`, `isDriverCall`, `isErrorName`.

SHA-256 of the source span: `3842a0e490f591744490adee2a712b51aa539e784ec4b1e6a70611b3ee42346d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
