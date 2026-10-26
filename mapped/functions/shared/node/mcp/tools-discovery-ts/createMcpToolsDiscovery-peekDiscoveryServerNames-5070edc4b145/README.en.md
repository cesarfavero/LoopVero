# `createMcpToolsDiscovery/_peekDiscoveryServerNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690918-690928](../../../../../../../reference/runtime/host-main.cjs#L690918-L690928) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690918-690928](../../../../../../../reference/runtime/host-main.cjs#L690918-L690928) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:690918

Calls written directly in this body: `_grokNativeIdentifiers`, `core2.definitionSource.peekHttpServerNames`, `core2.definitionSource.peekStdioServerNames`, `new Set`.

SHA-256 of the source span: `094fd8653d65848ba2a1cee0808326287bb8853c3f23611fa393fe07d5055159`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
