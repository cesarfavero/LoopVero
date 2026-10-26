# `createMcpToolsDiscovery/_withRowIdentityStatuses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690822-690835](../../../../../../../reference/runtime/host-main.cjs#L690822-L690835) | `FunctionDeclaration` | no | `base, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690822-690835](../../../../../../../reference/runtime/host-main.cjs#L690822-L690835) | 5 | 2 | 0 | 4 | 0 | 0 |

### host:690822

Calls written directly in this body: `_rowIdentityIds`, `base.has`, `core2.lastAccountDisplayConfig`, `deps.needsGrantRowIdentity`, `extra.push`, `new Map`.

SHA-256 of the source span: `b6f4d9951d9e0445d6fa6f5b8eb8bdaef1477e6b76409cd9312709c3f06ae63b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
