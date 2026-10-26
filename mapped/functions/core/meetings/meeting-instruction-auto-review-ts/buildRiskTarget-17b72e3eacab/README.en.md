# `buildRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-instruction-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-instruction-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772193-772203](../../../../../../reference/runtime/host-main.cjs#L772193-L772203) | `ArrowFunctionExpression` | no | `{ target, ...instructions }` |
| [evaluation:571425-571435](../../../../../../reference/runtime/sand-eval-runner.cjs#L571425-L571435) | `ArrowFunctionExpression` | no | `{ target, ...instructions }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772193-772203](../../../../../../reference/runtime/host-main.cjs#L772193-L772203) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772193 uses an implicit arrow-function return.
| [evaluation:571425-571435](../../../../../../reference/runtime/sand-eval-runner.cjs#L571425-L571435) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:571425 uses an implicit arrow-function return.

### host:772193

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `bd6929f75276f75ece8b619284247fd117971d631cd09d25569037ce7acdbfac`.

### evaluation:571425

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `bd6929f75276f75ece8b619284247fd117971d631cd09d25569037ce7acdbfac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
