# `SandMcpManager.noteSettledAfterPluginWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690042-690060](../../../../../../../reference/runtime/host-main.cjs#L690042-L690060) | `method` | no | `listed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690042-690060](../../../../../../../reference/runtime/host-main.cjs#L690042-L690060) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:690042

Calls written directly in this body: `listed.backend.then`, `listed.box.then`.

SHA-256 of the source span: `af7d64b93826e0a9e3b3eb39ee324b7d7930b27b3f423e3d54eee716295efa66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
