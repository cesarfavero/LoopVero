# `SandMcpExecutor.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691535-691541](../../../../../../../reference/runtime/host-main.cjs#L691535-L691541) | `method` | no | `discovery, persistImage, spillLargeText, auditIdentity, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691535-691541](../../../../../../../reference/runtime/host-main.cjs#L691535-L691541) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:691535

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.auditIdentity`, `this.discovery`, `this.mcpConfigJson`, `this.persistImage`, `this.spillLargeText`.

SHA-256 of the source span: `225b739972175f74fb19e5550c58d4b2abea3d8012a84df9425d2f340f877338`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
