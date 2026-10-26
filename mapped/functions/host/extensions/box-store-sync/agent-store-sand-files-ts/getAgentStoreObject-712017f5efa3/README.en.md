# `getAgentStoreObject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474307-474314](../../../../../../../reference/runtime/host-main.cjs#L474307-L474314) | `FunctionDeclaration` | yes | `client, sourceId, relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474307-474314](../../../../../../../reference/runtime/host-main.cjs#L474307-L474314) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:474307

Calls written directly in this body: `client.presignReads`, `fetchAgentStoreObjectFromUrl`.

SHA-256 of the source span: `82605903ab25bce2c6335132802b2736a1608f3e416a3f1c932a04692596326b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
