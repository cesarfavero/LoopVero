# `createdAtMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-conversation-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-conversation-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508791-508795](../../../../../../../reference/runtime/host-main.cjs#L508791-L508795) | `FunctionDeclaration` | no | `createdAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508791-508795](../../../../../../../reference/runtime/host-main.cjs#L508791-L508795) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:508791

Calls written directly in this body: `Date.parse`, `Number.isFinite`, `createdAt.trim`.

SHA-256 of the source span: `56cd72bd40f500fdeb13b537bd4d270b96e1c68d6e8f930910e035bce51b7cbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
