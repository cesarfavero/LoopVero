# `hasCronTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628673-628675](../../../../../reference/runtime/sand-eval-runner.cjs#L628673-L628675) | `FunctionDeclaration` | no | `spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628673-628675](../../../../../reference/runtime/sand-eval-runner.cjs#L628673-L628675) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628673

Calls written directly in this body: `triggerCronSchedules`.

SHA-256 of the source span: `c72028069b8370cf59e43f4f90daebaea00d0495e2d6fcc4838d584a26bb79e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
