# `recoverConversationBlobDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:1057-1092](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1057-L1092) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1057-1092](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1057-L1092) | 3 | 0 | 0 | 1 | 0 | 0 |

### state-worker:1057

Calls written directly in this body: `.replace`, `.toISOString`, `Math.ceil`, `finishConversationBlobRecovery`, `new Date`, `options.log`, `recovery.quarantineCorruptSqliteDb`, `writeSandDataFileSync`.

SHA-256 of the source span: `980ac4f0d2f8b85abc8c6f7c32b5b4557853380ad2a93f0232f4152099798541`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
