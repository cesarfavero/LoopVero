# `SandMcpManager.resolveListedDisplayServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690083-690091](../../../../../../../reference/runtime/host-main.cjs#L690083-L690091) | `method` | yes | `rawServerId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690083-690091](../../../../../../../reference/runtime/host-main.cjs#L690083-L690091) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:690083

Calls written directly in this body: `findDisplayServerByAddress`, `isGrokDisplayServerId`, `rawServerId.trim`, `this.currentAccountDisplayConfigView`, `this.resolveDisplayServer`.

SHA-256 of the source span: `2ce259eecee1f4ba81af48aadb1bad8752b2ff3bf2cbee79e26d289473774597`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
