# `sameBodyText/normalize6`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732834-732834](../../../../../../../reference/runtime/host-main.cjs#L732834-L732834) | `ArrowFunctionExpression` | no | `text3` |
| [evaluation:540356-540356](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540356-L540356) | `ArrowFunctionExpression` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732834-732834](../../../../../../../reference/runtime/host-main.cjs#L732834-L732834) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732834 uses an implicit arrow-function return.
| [evaluation:540356-540356](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540356-L540356) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:540356 uses an implicit arrow-function return.

### host:732834

Calls written directly in this body: `.trim`, `text3.replace`.

SHA-256 of the source span: `c6d3f1c0a066d74e730cf79309a29e7bc32a3ca142e2ff47d95e362ec5295a51`.

### evaluation:540356

Calls written directly in this body: `.trim`, `text3.replace`.

SHA-256 of the source span: `c6d3f1c0a066d74e730cf79309a29e7bc32a3ca142e2ff47d95e362ec5295a51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
