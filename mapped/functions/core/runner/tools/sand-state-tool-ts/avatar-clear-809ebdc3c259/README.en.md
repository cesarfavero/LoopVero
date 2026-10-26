# `avatar.clear`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763044-763044](../../../../../../../reference/runtime/host-main.cjs#L763044-L763044) | `ArrowFunctionExpression` | yes | `_args, deps` |
| [evaluation:555654-555654](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555654-L555654) | `ArrowFunctionExpression` | yes | `_args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763044-763044](../../../../../../../reference/runtime/host-main.cjs#L763044-L763044) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:763044 uses an implicit arrow-function return.
| [evaluation:555654-555654](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555654-L555654) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:555654 uses an implicit arrow-function return.

### host:763044

Calls written directly in this body: `deps.state.clearAvatar`.

SHA-256 of the source span: `7036a12d6dca3996e24d23d3d765f521c8969ce5b5ed0cbc80763e11a85edf2d`.

### evaluation:555654

Calls written directly in this body: `deps.state.clearAvatar`.

SHA-256 of the source span: `7036a12d6dca3996e24d23d3d765f521c8969ce5b5ed0cbc80763e11a85edf2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
