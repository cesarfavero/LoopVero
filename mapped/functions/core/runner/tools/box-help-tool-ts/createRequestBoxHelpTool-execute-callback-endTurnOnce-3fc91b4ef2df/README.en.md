# `createRequestBoxHelpTool/execute/<callback>/endTurnOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/box-help-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725338-725342](../../../../../../../reference/runtime/host-main.cjs#L725338-L725342) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:560441-560445](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560441-L560445) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725338-725342](../../../../../../../reference/runtime/host-main.cjs#L725338-L725342) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560441-560445](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560441-L560445) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:725338

Calls written directly in this body: `d.endTurn`.

Assignment or increment targets: `turnEnded`.

SHA-256 of the source span: `99a7a3bf61e35ffd324b2ea473ed75d2a46d8e4efdced5c438989da569736acc`.

### evaluation:560441

Calls written directly in this body: `d.endTurn`.

Assignment or increment targets: `turnEnded`.

SHA-256 of the source span: `99a7a3bf61e35ffd324b2ea473ed75d2a46d8e4efdced5c438989da569736acc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
