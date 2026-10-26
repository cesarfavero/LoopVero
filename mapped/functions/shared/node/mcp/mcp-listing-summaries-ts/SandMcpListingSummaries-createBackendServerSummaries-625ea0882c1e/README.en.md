# `SandMcpListingSummaries.createBackendServerSummaries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-summaries.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688842-688867](../../../../../../../reference/runtime/host-main.cjs#L688842-L688867) | `method` | no | `server, backendEntries, authStateFor` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688842-688867](../../../../../../../reference/runtime/host-main.cjs#L688842-L688867) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:688842

Calls written directly in this body: `backendEntries.find`, `slots.map`, `this.createBackendServerSummary`.

SHA-256 of the source span: `cf75a3845b6249647ed408adf5f5334512f1be8ace6dadf7e48f96ff28047d20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
