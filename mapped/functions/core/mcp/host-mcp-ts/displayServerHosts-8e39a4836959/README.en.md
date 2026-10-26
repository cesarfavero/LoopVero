# `displayServerHosts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700835-700855](../../../../../../reference/runtime/host-main.cjs#L700835-L700855) | `FunctionDeclaration` | no | `display, restMcpHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700835-700855](../../../../../../reference/runtime/host-main.cjs#L700835-L700855) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:700835

Calls written directly in this body: `hosts.set`, `mcpPermissionServerHost`, `new Map`, `provisionalMcpAccountServerIdentifier`.

SHA-256 of the source span: `1c2799c4531c649717bad6897cf75cf5bb35c551eb9288dfe8ec8cc54e67d0fe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
