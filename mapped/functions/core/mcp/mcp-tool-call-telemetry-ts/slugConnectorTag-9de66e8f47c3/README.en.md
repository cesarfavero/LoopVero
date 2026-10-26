# `slugConnectorTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693312-693316](../../../../../../reference/runtime/host-main.cjs#L693312-L693316) | `FunctionDeclaration` | no | `providerIdentifier, serverUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693312-693316](../../../../../../reference/runtime/host-main.cjs#L693312-L693316) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:693312

Calls written directly in this body: `boundedConnectorTag`, `connectorAuthTag`, `isNamedConnectorTag`.

SHA-256 of the source span: `2d39aeb9253f825913100367f36d46076214de2341c7fbd1d3b05e54ea8cece9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
