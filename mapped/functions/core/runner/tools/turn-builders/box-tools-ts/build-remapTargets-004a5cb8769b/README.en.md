# `build/remapTargets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779147-779147](../../../../../../../../reference/runtime/host-main.cjs#L779147-L779147) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:578881-578881](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578881-L578881) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779147-779147](../../../../../../../../reference/runtime/host-main.cjs#L779147-L779147) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:779147 uses an implicit arrow-function return.
| [evaluation:578881-578881](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578881-L578881) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:578881 uses an implicit arrow-function return.

### host:779147

Calls written directly in this body: `remapTargets.call`.

SHA-256 of the source span: `25fba7ed9d93035ba90e473c80545280cc635ad4efca398ef07f4a2f33bc9457`.

### evaluation:578881

Calls written directly in this body: `remapTargets.call`.

SHA-256 of the source span: `25fba7ed9d93035ba90e473c80545280cc635ad4efca398ef07f4a2f33bc9457`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
