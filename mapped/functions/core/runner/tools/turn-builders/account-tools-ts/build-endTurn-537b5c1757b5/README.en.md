# `build/endTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/account-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/account-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775430-775430](../../../../../../../../reference/runtime/host-main.cjs#L775430-L775430) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:575075-575075](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575075-L575075) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775430-775430](../../../../../../../../reference/runtime/host-main.cjs#L775430-L775430) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:775430 uses an implicit arrow-function return.
| [evaluation:575075-575075](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575075-L575075) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:575075 uses an implicit arrow-function return.

### host:775430

Calls written directly in this body: `turn.endThisRunAwaitingUser`.

SHA-256 of the source span: `e2c8523ca251032efbd7d40f0663cac9d0d5bce21a9fc887abbbfbc1eb34da76`.

### evaluation:575075

Calls written directly in this body: `turn.endThisRunAwaitingUser`.

SHA-256 of the source span: `e2c8523ca251032efbd7d40f0663cac9d0d5bce21a9fc887abbbfbc1eb34da76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
