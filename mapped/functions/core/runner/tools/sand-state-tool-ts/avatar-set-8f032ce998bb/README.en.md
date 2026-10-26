# `avatar.set`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763043-763043](../../../../../../../reference/runtime/host-main.cjs#L763043-L763043) | `ArrowFunctionExpression` | yes | `args, deps, need` |
| [evaluation:555653-555653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555653-L555653) | `ArrowFunctionExpression` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763043-763043](../../../../../../../reference/runtime/host-main.cjs#L763043-L763043) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:763043 uses an implicit arrow-function return.
| [evaluation:555653-555653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555653-L555653) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:555653 uses an implicit arrow-function return.

### host:763043

Calls written directly in this body: `deps.state.setAvatar`, `need`.

SHA-256 of the source span: `a0de9a46c03d2ac71e2e852e70b20dfe671c0f44fef7c778cd789adb1d1ce2bf`.

### evaluation:555653

Calls written directly in this body: `deps.state.setAvatar`, `need`.

SHA-256 of the source span: `a0de9a46c03d2ac71e2e852e70b20dfe671c0f44fef7c778cd789adb1d1ce2bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
