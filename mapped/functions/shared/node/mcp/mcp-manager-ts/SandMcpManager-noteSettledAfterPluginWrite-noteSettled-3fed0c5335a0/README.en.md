# `SandMcpManager.noteSettledAfterPluginWrite/noteSettled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690043-690051](../../../../../../../reference/runtime/host-main.cjs#L690043-L690051) | `ArrowFunctionExpression` | no | `unavailable2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690043-690051](../../../../../../../reference/runtime/host-main.cjs#L690043-L690051) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:690043

Calls written directly in this body: `listed.isCurrent`, `this.cachedListing`, `this.displayListing.noteSettled`, `this.summarizeServers`.

SHA-256 of the source span: `b44a316bbb5c5239af8d61e3bbe0cffae467250f37d4376caf8c5d8649d5af79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
