# `createCloudAgentsClient/setArchived`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513227-513236](../../../../../../reference/runtime/host-main.cjs#L513227-L513236) | `FunctionDeclaration` | yes | `bcId, archived` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513227-513236](../../../../../../reference/runtime/host-main.cjs#L513227-L513236) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:513227

Calls written directly in this body: `.archiveBackgroundComposer`, `client`, `new ArchiveBackgroundComposerRequest`.

SHA-256 of the source span: `27881b7568a450b7686f2741f24e941a396e307bc72a46701f0b10d1c6d86d98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
