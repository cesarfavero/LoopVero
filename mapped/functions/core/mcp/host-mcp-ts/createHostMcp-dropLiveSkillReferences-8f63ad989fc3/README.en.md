# `createHostMcp/dropLiveSkillReferences`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700995-701007](../../../../../../reference/runtime/host-main.cjs#L700995-L701007) | `ArrowFunctionExpression` | no | `sourceUrls` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700995-701007](../../../../../../reference/runtime/host-main.cjs#L700995-L701007) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:700995

Calls written directly in this body: `pluginSkills.removeLiveReferences`, `reportMcpHostEdgeDegraded`, `reportMcpHostEdgeFailure`.

SHA-256 of the source span: `b9743545c900b87016a5f4f53c53f8a5b92da8c01c5a5f7acb9536ccc109742a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
