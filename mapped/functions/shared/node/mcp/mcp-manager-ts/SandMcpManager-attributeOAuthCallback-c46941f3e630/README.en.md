# `SandMcpManager.attributeOAuthCallback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690171-690173](../../../../../../../reference/runtime/host-main.cjs#L690171-L690173) | `method` | no | `report, stateId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690171-690173](../../../../../../../reference/runtime/host-main.cjs#L690171-L690173) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:690171

Calls written directly in this body: `this.authWatches.attributeOAuthCallback`.

SHA-256 of the source span: `0767985d35de6a99c9ab2c411c042365a1be2214f198f7ff9ef2b74c2c7e7976`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
