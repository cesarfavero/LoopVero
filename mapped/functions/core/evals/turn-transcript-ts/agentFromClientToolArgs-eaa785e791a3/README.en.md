# `agentFromClientToolArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628452-628465](../../../../../../reference/runtime/sand-eval-runner.cjs#L628452-L628465) | `FunctionDeclaration` | no | `args, subagentByRequestId, mainRequestIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628452-628465](../../../../../../reference/runtime/sand-eval-runner.cjs#L628452-L628465) | 8 | 0 | 0 | 5 | 0 | 0 |

### evaluation:628452

Calls written directly in this body: `isUnknownRecord2`, `mainRequestIds.has`, `parsed.conversationId.startsWith`, `parsedModelArgs`, `subagentByRequestId.get`.

SHA-256 of the source span: `734acef54216be8befe06a0dccb0c9eaa1756ebd091477ece2734400ed420850`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
