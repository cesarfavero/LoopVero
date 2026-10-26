# `linkHostCategory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583456-583461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583456-L583461) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583456-583461](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583456-L583461) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:583456

Calls written directly in this body: `SHOPPING_BRANDS_ANY_TLD.test`, `onDomain`, `parseHttpUrl2`.

SHA-256 of the source span: `a807d2a44f6cdc8872c335a17af0942e1ad9036d409751b6268545dd3049eb5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
