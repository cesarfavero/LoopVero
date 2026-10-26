# `sandToolCallAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628403-628439](../../../../../../reference/runtime/sand-eval-runner.cjs#L628403-L628439) | `FunctionDeclaration` | no | `transcripts, segments, updates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628403-628439](../../../../../../reference/runtime/sand-eval-runner.cjs#L628403-L628439) | 6 | 4 | 0 | 1 | 0 | 0 |

### evaluation:628403

Calls written directly in this body: `agentFromClientToolArgs`, `agents.has`, `agents.set`, `isUnknownRecord2`, `new Map`, `new Set`, `requestAgent`, `segments.flatMap`, `subagentAgent`, `subagentByRequestId.set`, `toolCallIds2`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `4da87bdf1e8cf6d3d4ffd405b0e3eaf3a08d0e01d120a970bbea2f3e201538a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
