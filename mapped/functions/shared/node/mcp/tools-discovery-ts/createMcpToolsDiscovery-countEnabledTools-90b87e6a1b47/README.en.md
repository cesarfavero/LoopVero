# `createMcpToolsDiscovery/_countEnabledTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690911-690913](../../../../../../../reference/runtime/host-main.cjs#L690911-L690913) | `FunctionDeclaration` | no | `tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690911-690913](../../../../../../../reference/runtime/host-main.cjs#L690911-L690913) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:690911

Calls written directly in this body: `tools.filter`.

SHA-256 of the source span: `edeaaead080447ba7d32850735b9ab62f209ffedcb9e9e081aeb6743a51ad33d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
