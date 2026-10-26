# `SandMcpManager.resolveAccountDisplayServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690124-690155](../../../../../../../reference/runtime/host-main.cjs#L690124-L690155) | `method` | yes | `serverId, requireFreshRead` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690124-690155](../../../../../../../reference/runtime/host-main.cjs#L690124-L690155) | 9 | 0 | 2 | 3 | 5 | 1 |

### host:690124

Calls written directly in this body: `findDisplayServerByAddress`, `new SandMcpConfigError`, `this.accountDisplayConfigProvider`, `this.accountServersProvider`, `this.accountSlots.noteAccountDisplayConfig`, `this.lastAccountDisplayConfigView`.

Assignment or increment targets: `display`.

Explicit throw targets: `SandMcpConfigError`, `error64`.

SHA-256 of the source span: `d6b1c3fc31ce202997be538717dcb21ec66c2316c6eb80eea1e11b73485b7335`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
