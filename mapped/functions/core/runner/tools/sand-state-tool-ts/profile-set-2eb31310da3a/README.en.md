# `profile.set`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763028-763034](../../../../../../../reference/runtime/host-main.cjs#L763028-L763034) | `ArrowFunctionExpression` | yes | `args, deps` |
| [evaluation:555638-555644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555638-L555644) | `ArrowFunctionExpression` | yes | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763028-763034](../../../../../../../reference/runtime/host-main.cjs#L763028-L763034) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:763028 uses an implicit arrow-function return.
| [evaluation:555638-555644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555638-L555644) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:555638 uses an implicit arrow-function return.

### host:763028

Calls written directly in this body: `deps.state.updateProfile`.

SHA-256 of the source span: `43b5cdcc546ba531eed3f6fddff6b1c60708d656375c49b519acb51d85fbcbef`.

### evaluation:555638

Calls written directly in this body: `deps.state.updateProfile`.

SHA-256 of the source span: `43b5cdcc546ba531eed3f6fddff6b1c60708d656375c49b519acb51d85fbcbef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
