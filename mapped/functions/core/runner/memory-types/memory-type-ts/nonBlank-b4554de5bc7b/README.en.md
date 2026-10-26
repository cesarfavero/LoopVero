# `nonBlank`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-type.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-type-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702535-702535](../../../../../../../reference/runtime/host-main.cjs#L702535-L702535) | `ArrowFunctionExpression` | no | `field` |
| [evaluation:534985-534985](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534985-L534985) | `ArrowFunctionExpression` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702535-702535](../../../../../../../reference/runtime/host-main.cjs#L702535-L702535) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:702535 uses an implicit arrow-function return.
| [evaluation:534985-534985](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534985-L534985) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:534985 uses an implicit arrow-function return.

### host:702535

Calls written directly in this body: `.refine`, `string2`.

SHA-256 of the source span: `e367535712f528e46226579da7e588a344c86df012c9a798a05a7465dec45fd9`.

### evaluation:534985

Calls written directly in this body: `.refine`, `string2`.

SHA-256 of the source span: `e367535712f528e46226579da7e588a344c86df012c9a798a05a7465dec45fd9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
