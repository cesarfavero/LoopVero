# `createMcpToolsDiscovery/_listBoxServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690934-690973](../../../../../../../reference/runtime/host-main.cjs#L690934-L690973) | `FunctionDeclaration` | yes | `serverIdentifiers, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690934-690973](../../../../../../../reference/runtime/host-main.cjs#L690934-L690973) | 3 | 0 | 4 | 2 | 1 | 0 |

### host:690934

Calls written directly in this body: `.catch`, `.filter`, `.map`, `_ensureBoxServersPushed`, `boxMcpExec.listTools`, `core2.definitionSource.ensureConfigLoaded`, `core2.definitionSource.getServersMissingPluginFiles`, `core2.definitionSource.reloadBoxServers`, `new SandMcpConfigError`, `new Set`, `servers.filter`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `9560a8b708623d5db799bfc3ba9616fe385d752fbc7d65366a75aed01c2b38d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
