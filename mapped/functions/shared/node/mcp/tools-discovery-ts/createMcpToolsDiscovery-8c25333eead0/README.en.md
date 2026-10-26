# `createMcpToolsDiscovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690761-691533](../../../../../../../reference/runtime/host-main.cjs#L690761-L691533) | `FunctionDeclaration` | no | `core2, deps = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690761-691533](../../../../../../../reference/runtime/host-main.cjs#L690761-L691533) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:690761

Calls written directly in this body: `Promise.resolve`, `new Map`.

SHA-256 of the source span: `35cbcd8704f9d3719b30ecc541ab261e453660851c71897caf5ecce846fc4f78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
