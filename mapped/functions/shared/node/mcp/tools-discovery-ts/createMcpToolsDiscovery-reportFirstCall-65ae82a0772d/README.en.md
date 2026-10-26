# `createMcpToolsDiscovery/_reportFirstCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690774-690790](../../../../../../../reference/runtime/host-main.cjs#L690774-L690790) | `FunctionDeclaration` | no | `providerIdentifier, ok` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690774-690790](../../../../../../../reference/runtime/host-main.cjs#L690774-L690790) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:690774

Calls written directly in this body: `_displayRowForIdentifier`, `deps.onConnectorAuth`, `firstCallReported.get`, `firstCallReported.set`.

Assignment or increment targets: `entry.failed`, `entry.ok`.

SHA-256 of the source span: `d760f8bf50de8f7dcd5ccb63a1fff3b0984022f406faf6a36e6f7f546d6fd42a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
