# `build/uploadFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779029-779029](../../../../../../../../reference/runtime/host-main.cjs#L779029-L779029) | `ArrowFunctionExpression` | no | `ctx, boxPath, data2` |
| [evaluation:578763-578763](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578763-L578763) | `ArrowFunctionExpression` | no | `ctx, boxPath, data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779029-779029](../../../../../../../../reference/runtime/host-main.cjs#L779029-L779029) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:779029 uses an implicit arrow-function return.
| [evaluation:578763-578763](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578763-L578763) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:578763 uses an implicit arrow-function return.

### host:779029

Calls written directly in this body: `host.remoteBox.uploadFile`, `host.resolveBoxId`.

SHA-256 of the source span: `548ff53f0175dea4d1fe9ac44807108288d7700e9922eb0e00aaffdc02d2fab4`.

### evaluation:578763

Calls written directly in this body: `host.remoteBox.uploadFile`, `host.resolveBoxId`.

SHA-256 of the source span: `548ff53f0175dea4d1fe9ac44807108288d7700e9922eb0e00aaffdc02d2fab4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
