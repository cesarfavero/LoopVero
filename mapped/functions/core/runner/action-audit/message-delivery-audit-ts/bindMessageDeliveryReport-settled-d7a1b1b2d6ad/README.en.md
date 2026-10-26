# `bindMessageDeliveryReport/settled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/message-delivery-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/message-delivery-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754987-754987](../../../../../../../reference/runtime/host-main.cjs#L754987-L754987) | `ArrowFunctionExpression` | no | `settlement` |
| [evaluation:539215-539215](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539215-L539215) | `ArrowFunctionExpression` | no | `settlement` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754987-754987](../../../../../../../reference/runtime/host-main.cjs#L754987-L754987) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:754987 uses an implicit arrow-function return.
| [evaluation:539215-539215](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539215-L539215) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:539215 uses an implicit arrow-function return.

### host:754987

Calls written directly in this body: `recorder`.

SHA-256 of the source span: `ddd30c0637228671ee44cf425885da0bb71532fc2d50104506090eabe1eabbca`.

### evaluation:539215

Calls written directly in this body: `recorder`.

SHA-256 of the source span: `ddd30c0637228671ee44cf425885da0bb71532fc2d50104506090eabe1eabbca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
