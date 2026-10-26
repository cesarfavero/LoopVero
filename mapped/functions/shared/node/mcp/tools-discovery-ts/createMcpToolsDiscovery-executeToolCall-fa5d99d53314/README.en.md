# `createMcpToolsDiscovery/_executeToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691480-691493](../../../../../../../reference/runtime/host-main.cjs#L691480-L691493) | `FunctionDeclaration` | no | `call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691480-691493](../../../../../../../reference/runtime/host-main.cjs#L691480-L691493) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:691480

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `_executeTool`, `createContext`, `new McpArgs`.

SHA-256 of the source span: `d0a7991c7f84cb29741fcdbb5eb6aa637edc472dc673cdedd4dddaa0212d078c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
