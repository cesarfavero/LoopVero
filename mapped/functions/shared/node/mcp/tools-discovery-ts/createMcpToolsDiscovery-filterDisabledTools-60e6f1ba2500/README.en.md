# `createMcpToolsDiscovery/_filterDisabledTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690904-690906](../../../../../../../reference/runtime/host-main.cjs#L690904-L690906) | `FunctionDeclaration` | no | `tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690904-690906](../../../../../../../reference/runtime/host-main.cjs#L690904-L690906) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:690904

Calls written directly in this body: `tools.filter`.

SHA-256 of the source span: `8a6b679942423dccc3282a47ce82fb369bd1cb5cd9c058a29f448bc04b73bf2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
