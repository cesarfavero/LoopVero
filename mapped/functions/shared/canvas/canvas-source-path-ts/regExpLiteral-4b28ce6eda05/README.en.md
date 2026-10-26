# `regExpLiteral`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/canvas/canvas-source-path.ts` · [Module README](../../../../../modules/shared/canvas/canvas-source-path-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770038-770038](../../../../../../reference/runtime/host-main.cjs#L770038-L770038) | `ArrowFunctionExpression` | no | `value` |
| [evaluation:566748-566748](../../../../../../reference/runtime/sand-eval-runner.cjs#L566748-L566748) | `ArrowFunctionExpression` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770038-770038](../../../../../../reference/runtime/host-main.cjs#L770038-L770038) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:770038 uses an implicit arrow-function return.
| [evaluation:566748-566748](../../../../../../reference/runtime/sand-eval-runner.cjs#L566748-L566748) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:566748 uses an implicit arrow-function return.

### host:770038

Calls written directly in this body: `value.replace`.

SHA-256 of the source span: `1bc7904008f0d4c1c4e07a9b6f78b9af9d4bdc6a5bd30e9f2d7e11941b155a24`.

### evaluation:566748

Calls written directly in this body: `value.replace`.

SHA-256 of the source span: `1bc7904008f0d4c1c4e07a9b6f78b9af9d4bdc6a5bd30e9f2d7e11941b155a24`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
