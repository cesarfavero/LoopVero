# `SandMcpManager.resolveDisplayServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690099-690123](../../../../../../../reference/runtime/host-main.cjs#L690099-L690123) | `method` | yes | `rawServerId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690099-690123](../../../../../../../reference/runtime/host-main.cjs#L690099-L690123) | 5 | 0 | 2 | 4 | 0 | 0 |

### host:690099

Calls written directly in this body: `findDisplayServerByAddress`, `isGrokDisplayServerId`, `rawServerId.trim`, `this.loadGrokBotAgentServers`, `this.resolveAccountDisplayServer`.

SHA-256 of the source span: `2673ff7e83f231eff991d63e9a9050a9164ad87cb5b17d9de94ea8485bd73803`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
