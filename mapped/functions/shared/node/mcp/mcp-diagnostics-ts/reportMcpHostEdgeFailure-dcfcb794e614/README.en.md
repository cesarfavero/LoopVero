# `reportMcpHostEdgeFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-diagnostics.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226173-226181](../../../../../../../reference/runtime/host-main.cjs#L226173-L226181) | `FunctionDeclaration` | no | `leg, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226173-226181](../../../../../../../reference/runtime/host-main.cjs#L226173-L226181) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:226173

Calls written directly in this body: `buffered.push`, `mcpErrorClassOf`, `pinnedReporter3`.

SHA-256 of the source span: `21ab4a6e59ad5c8389fb2d114da16c48d7c61538d932a67732cc036a80478350`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
