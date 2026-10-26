# `ConversationBlobRecoveryError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:994-997](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L994-L997) | `method` | no | `code, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:994-997](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L994-L997) | 0 | 0 | 0 | 0 | 0 | 0 |

### state-worker:994

Calls written directly in this body: `super`.

Assignment or increment targets: `this.code`.

SHA-256 of the source span: `8e6615d0faf89266d9efa1144243c18881ca7f9e61fb8fefbcc0a49ccb997d66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
