# `createMcpToolsDiscovery/_ensureBoxServersPushed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690980-691014](../../../../../../../reference/runtime/host-main.cjs#L690980-L691014) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690980-691014](../../../../../../../reference/runtime/host-main.cjs#L690980-L691014) | 3 | 0 | 2 | 4 | 0 | 1 |

### host:690980

Calls written directly in this body: `JSON.stringify`, `Object.keys`, `boxPushChain.then`, `core2.definitionSource.getPushedServerConfigs`, `push.catch`, `reportMcpHostEdgeFailure`.

Assignment or increment targets: `boxPushChain`, `stdioConfigs`.

SHA-256 of the source span: `7bdc4917054dbb85aad7ac3152ab3dd0b477b9bc234dedd907e223f73d6ac23e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
