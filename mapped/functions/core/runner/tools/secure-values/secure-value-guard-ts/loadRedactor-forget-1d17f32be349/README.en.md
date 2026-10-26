# `loadRedactor/forget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767760-767762](../../../../../../../../reference/runtime/host-main.cjs#L767760-L767762) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:563277-563279](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563277-L563279) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767760-767762](../../../../../../../../reference/runtime/host-main.cjs#L767760-L767762) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:563277-563279](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563277-L563279) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:767760

Calls written directly in this body: `loadedRedactors.delete`, `loadedRedactors.get`.

SHA-256 of the source span: `6becc778c022769370abbe720df1a7a32ffd86c04690ad5f2edf109480897fa2`.

### evaluation:563277

Calls written directly in this body: `loadedRedactors.delete`, `loadedRedactors.get`.

SHA-256 of the source span: `6becc778c022769370abbe720df1a7a32ffd86c04690ad5f2edf109480897fa2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
