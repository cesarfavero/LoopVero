# `createHostMcp/removeServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701031-701035](../../../../../../reference/runtime/host-main.cjs#L701031-L701035) | `FunctionExpression` | yes | `serverId` |
| [host:701267-701274](../../../../../../reference/runtime/host-main.cjs#L701267-L701274) | `FunctionExpression` | yes | `serverId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701031-701035](../../../../../../reference/runtime/host-main.cjs#L701031-L701035) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:701267-701274](../../../../../../reference/runtime/host-main.cjs#L701267-L701274) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:701031

Calls written directly in this body: `manager.removeServer`, `serversMutated`.

SHA-256 of the source span: `3f1f82365051d22ae1d78e46e9fa342c270e8edf80da08867e562c11be403981`.

### host:701267

Calls written directly in this body: `mutations.removeServer`, `toInstalledServers`.

SHA-256 of the source span: `5e4abda70b19a8663bc1987457fe2a9b47acde5c786dc9985e200975b3cce331`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
