# `collectReachableBlobHexIds/visitMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-gc.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22247-22288](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22247-L22288) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22247-22288](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22247-L22288) | 10 | 4 | 0 | 0 | 0 | 0 |

### state-worker:22247

Calls written directly in this body: `.map`, `Array.isArray`, `EDGES_NOT_WALKED_SO_REFERENTS_COLLECT.has`, `Object.values`, `blobFieldsByLocalName.get`, `blobIdsIn`, `fieldValue`, `getBlobReferenceMessageMetadata`, `isMessage`, `message.getType`, `messageType.fields.list`, `new Map`, `visitBlobReference`, `visitMessage`.

SHA-256 of the source span: `687e3f301a1fed21136e20b15f03c9e1002c81fdd56970c22fe1fffd458543e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
