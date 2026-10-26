# `watchDirectoryWithNodeFs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684348-684350](../../../../../reference/runtime/host-main.cjs#L684348-L684350) | `ArrowFunctionExpression` | no | `directory, onEvent` |
| [evaluation:627672-627674](../../../../../reference/runtime/sand-eval-runner.cjs#L627672-L627674) | `ArrowFunctionExpression` | no | `directory, onEvent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684348-684350](../../../../../reference/runtime/host-main.cjs#L684348-L684350) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:684348 uses an implicit arrow-function return.
| [evaluation:627672-627674](../../../../../reference/runtime/sand-eval-runner.cjs#L627672-L627674) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:627672 uses an implicit arrow-function return.

### host:684348

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `470705abcaab5e4c89176c90e6790c2bd213498bfbdee21cf6636950f9ba3d3d`.

### evaluation:627672

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f016de9fd993db734b79cb375045be4b1083ec87955bf432410bbaf611755b91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
