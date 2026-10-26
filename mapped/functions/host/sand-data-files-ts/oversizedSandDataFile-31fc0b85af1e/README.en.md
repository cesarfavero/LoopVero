# `oversizedSandDataFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453790-453792](../../../../../reference/runtime/host-main.cjs#L453790-L453792) | `FunctionDeclaration` | no | `path33, maxBytes` |
| [evaluation:627532-627534](../../../../../reference/runtime/sand-eval-runner.cjs#L627532-L627534) | `FunctionDeclaration` | no | `path33, maxBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453790-453792](../../../../../reference/runtime/host-main.cjs#L453790-L453792) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627532-627534](../../../../../reference/runtime/sand-eval-runner.cjs#L627532-L627534) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453790

Calls written directly in this body: `new RangeError`.

SHA-256 of the source span: `cf946ab51d29be6179ada8b9c2a987882467084a6701f1824a7a9304996f90c2`.

### evaluation:627532

Calls written directly in this body: `new RangeError`.

SHA-256 of the source span: `cf946ab51d29be6179ada8b9c2a987882467084a6701f1824a7a9304996f90c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
