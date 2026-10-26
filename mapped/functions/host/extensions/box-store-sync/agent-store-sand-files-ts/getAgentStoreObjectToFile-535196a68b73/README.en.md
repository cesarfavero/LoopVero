# `getAgentStoreObjectToFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474395-474402](../../../../../../../reference/runtime/host-main.cjs#L474395-L474402) | `FunctionDeclaration` | yes | `client, sourceId, relPath, destPath, maxBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474395-474402](../../../../../../../reference/runtime/host-main.cjs#L474395-L474402) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:474395

Calls written directly in this body: `client.presignReads`, `fetchAgentStoreObjectToFileFromUrl`.

SHA-256 of the source span: `23e3e9491329a69b6e6ce80e42c64376366bd4c580fdc3f40e574fa35a697c14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
