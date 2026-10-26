# `readTranscriptParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766324-766332](../../../../../../../reference/runtime/host-main.cjs#L766324-L766332) | `ArrowFunctionExpression` | no | `subagentToolName, subagent` |
| [evaluation:559688-559696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559688-L559696) | `ArrowFunctionExpression` | no | `subagentToolName, subagent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766324-766332](../../../../../../../reference/runtime/host-main.cjs#L766324-L766332) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:766324 uses an implicit arrow-function return.
| [evaluation:559688-559696](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559688-L559696) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:559688 uses an implicit arrow-function return.

### host:766324

Calls written directly in this body: `.describe`, `.int`, `.max`, `.nonnegative`, `.optional`, `.positive`, `number2`, `object`, `transcriptTargetParameters`.

SHA-256 of the source span: `e3dc0a9743e960d7a3e3bf0a792c7d9781b9056884477abd0b791ea269189bb2`.

### evaluation:559688

Calls written directly in this body: `.describe`, `.int`, `.max`, `.nonnegative`, `.optional`, `.positive`, `number2`, `object`, `transcriptTargetParameters`.

SHA-256 of the source span: `e3dc0a9743e960d7a3e3bf0a792c7d9781b9056884477abd0b791ea269189bb2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
