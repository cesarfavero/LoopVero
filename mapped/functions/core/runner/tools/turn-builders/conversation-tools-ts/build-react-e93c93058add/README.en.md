# `build/react`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769192-769195](../../../../../../../../reference/runtime/host-main.cjs#L769192-L769195) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:564839-564842](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564839-L564842) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769192-769195](../../../../../../../../reference/runtime/host-main.cjs#L769192-L769195) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769192 uses an implicit arrow-function return.
| [evaluation:564839-564842](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564839-L564842) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564839 uses an implicit arrow-function return.

### host:769192

Calls written directly in this body: `host.emitUpdate`.

SHA-256 of the source span: `d7a5a79b291e8c2ae5025f15418537e3a35e276cf4466d7b6981c058f0b621f3`.

### evaluation:564839

Calls written directly in this body: `host.emitUpdate`.

SHA-256 of the source span: `d7a5a79b291e8c2ae5025f15418537e3a35e276cf4466d7b6981c058f0b621f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
