# `toModelVisibleText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530470-530472](../../../../../reference/runtime/sand-eval-runner.cjs#L530470-L530472) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530470-530472](../../../../../reference/runtime/sand-eval-runner.cjs#L530470-L530472) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:530470

Calls written directly in this body: `text3.replaceAll`.

SHA-256 of the source span: `c7fe380b6ecc7b7aef736eb1517ac2a9305a25541b884583d8fc47fb29f8c1f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
