# `createHostMcp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700939-701354](../../../../../../reference/runtime/host-main.cjs#L700939-L701354) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700939-701354](../../../../../../reference/runtime/host-main.cjs#L700939-L701354) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:700939

Calls written directly in this body: `createMcpListingSpanObserver`, `createMcpToolsDiscovery`, `createStdioSignInAbsenceLedger`, `manager.definitionSourceView`, `manager.setAuthCompletionObserver`, `manager.setBoxRuntime`, `new SandMcpManager`, `pluginInstallFolderOption`, `signInAbsence.observe`.

SHA-256 of the source span: `9b753d5ed7891dd3bf0714488de1b841a9f82cd907e30375de5e35de49faa426`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
