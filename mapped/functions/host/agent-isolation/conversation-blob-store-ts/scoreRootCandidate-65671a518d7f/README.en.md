# `scoreRootCandidate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22312-22330](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22312-L22330) | `FunctionDeclaration` | no | `data, presentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22312-22330](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22312-L22330) | 3 | 1 | 0 | 5 | 0 | 1 |

### state-worker:22312

Calls written directly in this body: `ConversationStateStructure.fromBinary`, `presentIds.has`, `toHex2`.

Assignment or increment targets: `structure`.

SHA-256 of the source span: `6f815c1acc1a067871280e47f79794ed7dc2788efd26abe7077da9a167af6ece`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
