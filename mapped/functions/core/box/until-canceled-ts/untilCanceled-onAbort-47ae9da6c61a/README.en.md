# `untilCanceled/onAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/until-canceled.ts` · [Module README](../../../../../modules/core/box/until-canceled-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553796-553796](../../../../../../reference/runtime/host-main.cjs#L553796-L553796) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:575565-575565](../../../../../../reference/runtime/sand-eval-runner.cjs#L575565-L575565) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553796-553796](../../../../../../reference/runtime/host-main.cjs#L553796-L553796) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:553796 uses an implicit arrow-function return.
| [evaluation:575565-575565](../../../../../../reference/runtime/sand-eval-runner.cjs#L575565-L575565) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:575565 uses an implicit arrow-function return.

### host:553796

Calls written directly in this body: `canceled.reject`.

SHA-256 of the source span: `2644cdb7c262fff446f151d046f8defba30023142177382b94be835dcadcc7f2`.

### evaluation:575565

Calls written directly in this body: `canceled.reject`.

SHA-256 of the source span: `2644cdb7c262fff446f151d046f8defba30023142177382b94be835dcadcc7f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
