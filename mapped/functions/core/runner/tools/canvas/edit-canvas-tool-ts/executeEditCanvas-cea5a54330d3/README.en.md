# `executeEditCanvas`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775639-775689](../../../../../../../../reference/runtime/host-main.cjs#L775639-L775689) | `FunctionDeclaration` | yes | `port, args` |
| [evaluation:575283-575333](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575283-L575333) | `FunctionDeclaration` | yes | `port, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775639-775689](../../../../../../../../reference/runtime/host-main.cjs#L775639-L775689) | 11 | 0 | 3 | 6 | 0 | 0 |
| [evaluation:575283-575333](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575283-L575333) | 11 | 0 | 3 | 6 | 0 | 0 |

### host:775639

Calls written directly in this body: `.join`, `applyExactStringEdit`, `describeReadFailure`, `describeWriteFailure2`, `lines2.join`, `occurrenceLines`, `port.read`, `port.write`, `settleWriteFailure`.

Assignment or increment targets: `written`.

SHA-256 of the source span: `c770837fec933fb273d038259a463aa16bc56410420eba88d27aff326132b2b3`.

### evaluation:575283

Calls written directly in this body: `.join`, `applyExactStringEdit`, `describeReadFailure`, `describeWriteFailure2`, `lines2.join`, `occurrenceLines`, `port.read`, `port.write`, `settleWriteFailure`.

Assignment or increment targets: `written`.

SHA-256 of the source span: `c770837fec933fb273d038259a463aa16bc56410420eba88d27aff326132b2b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
