# `createMcpToolsDiscovery/_httpServerNamesForBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691424-691428](../../../../../../../reference/runtime/host-main.cjs#L691424-L691428) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691424-691428](../../../../../../../reference/runtime/host-main.cjs#L691424-L691428) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:691424

Calls written directly in this body: `.filter`, `.map`, `Object.entries`, `_grokNativeIdentifiers`, `core2.definitionSource.getUserServerConfigs`, `new Set`.

SHA-256 of the source span: `862b40a01ab75d1f4b949a65e32dfdead0915b2a5a0f6fced4784a38e5f317cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
