# `createCloudAgentsClient/rename6`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513199-513201](../../../../../../reference/runtime/host-main.cjs#L513199-L513201) | `FunctionDeclaration` | yes | `bcId, newName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513199-513201](../../../../../../reference/runtime/host-main.cjs#L513199-L513201) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:513199

Calls written directly in this body: `.renameBackgroundComposer`, `client`, `new RenameBackgroundComposerRequest`.

SHA-256 of the source span: `1a6532230896321419ac132f244c49174d7333659c1bc26f618f1aab560d351d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
