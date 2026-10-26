# `createHostMcp/createExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701091-701110](../../../../../../reference/runtime/host-main.cjs#L701091-L701110) | `ArrowFunctionExpression` | no | `persistImage, spillLargeText, auditIdentity, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701091-701110](../../../../../../reference/runtime/host-main.cjs#L701091-L701110) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:701091

Calls written directly in this body: `new SandMcpExecutor`.

SHA-256 of the source span: `5365b4c32bdbbf1f0600512e681e3609c4c93793c3e3afd01dee4e33348d4cdd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
