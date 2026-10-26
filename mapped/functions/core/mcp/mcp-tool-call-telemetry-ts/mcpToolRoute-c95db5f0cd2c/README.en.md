# `mcpToolRoute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693280-693294](../../../../../../reference/runtime/host-main.cjs#L693280-L693294) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693280-693294](../../../../../../reference/runtime/host-main.cjs#L693280-L693294) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:693280

Calls written directly in this body: `.hostname.toLowerCase`, `GROK_CONNECTORS_GATEWAY_HOST.test`, `GROK_MINTED_SERVER_IDENTIFIER.test`, `URL.canParse`, `getRestMcpProviderIdForUrlOnHost`, `new URL`.

SHA-256 of the source span: `12deb4a490d3dba1ceb235db89779d004a2250e74071372312e82629d1ec4d45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
