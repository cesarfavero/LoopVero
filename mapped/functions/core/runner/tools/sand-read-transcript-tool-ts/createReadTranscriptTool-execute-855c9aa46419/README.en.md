# `createReadTranscriptTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/sand-read-transcript-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-read-transcript-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766433-766456](../../../../../../../reference/runtime/host-main.cjs#L766433-L766456) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |
| [evaluation:559797-559820](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559797-L559820) | `ArrowFunctionExpression` | yes | `ctx, args, toolDeps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766433-766456](../../../../../../../reference/runtime/host-main.cjs#L766433-L766456) | 5 | 0 | 2 | 3 | 1 | 0 |
| [evaluation:559797-559820](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559797-L559820) | 5 | 0 | 2 | 3 | 1 | 0 |

### host:766433

Calls written directly in this body: `aroundArgsSchema.parse`, `createTranscriptsVirtualMount`, `new SandToolInputError`, `presentArguments`, `readWindow`, `renderAroundRead`, `renderRead`, `subagent.review`, `transcriptPath`, `transcriptTargetOf`, `transcriptVirtualMountAccess`, `virtualMount.read`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `de76cecaa32b3b4acd23f094e8ce6acb237459882d9420e85d264ce0b62870e3`.

### evaluation:559797

Calls written directly in this body: `aroundArgsSchema.parse`, `createTranscriptsVirtualMount`, `new SandToolInputError`, `presentArguments`, `readWindow`, `renderAroundRead`, `renderRead`, `subagent.review`, `transcriptPath`, `transcriptTargetOf`, `transcriptVirtualMountAccess`, `virtualMount.read`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `de76cecaa32b3b4acd23f094e8ce6acb237459882d9420e85d264ce0b62870e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
