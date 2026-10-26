# `createMcpToolsDiscovery/_readResource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691168-691192](../../../../../../../reference/runtime/host-main.cjs#L691168-L691192) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691168-691192](../../../../../../../reference/runtime/host-main.cjs#L691168-L691192) | 4 | 0 | 5 | 4 | 0 | 1 |

### host:691168

Calls written directly in this body: `_ensureBoxServersPushed`, `_isBoxStdioProvider`, `_isHttpProvider`, `boxMcpExec.readResource`, `core2.backendMcpExec.readResource`, `errorMessage`.

SHA-256 of the source span: `252495b4fb797d438844132e968a60309729bc431bfd9a8ccb38b0ae3ff2c4a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
