# `findLatestDurableRootBlobId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-maintenance.ts` · [Module README](../../../../../../modules/host/extensions/session/session-maintenance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720374-720387](../../../../../../../reference/runtime/host-main.cjs#L720374-L720387) | `FunctionDeclaration` | yes | `host, {   dbPath,   blobsPath }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720374-720387](../../../../../../../reference/runtime/host-main.cjs#L720374-L720387) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:720374

Calls written directly in this body: `.findLatestRootBlobId`, `agentIdFromDbPath`, `errorLogTag`, `host.requireWorkerPool`, `new ConversationRecoveryScanError`.

Explicit throw targets: `ConversationRecoveryScanError`.

SHA-256 of the source span: `14b2fbc5256748bdb7669d6986740cc2cf11cc635347cb7ed0abde95febb669f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
