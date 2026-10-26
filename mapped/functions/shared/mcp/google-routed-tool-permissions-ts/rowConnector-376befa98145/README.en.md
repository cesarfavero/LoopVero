# `rowConnector`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687127-687137](../../../../../../reference/runtime/host-main.cjs#L687127-L687137) | `FunctionDeclaration` | no | `serverHost` |
| [evaluation:579262-579272](../../../../../../reference/runtime/sand-eval-runner.cjs#L579262-L579272) | `FunctionDeclaration` | no | `serverHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687127-687137](../../../../../../reference/runtime/host-main.cjs#L687127-L687137) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:579262-579272](../../../../../../reference/runtime/sand-eval-runner.cjs#L579262-L579272) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:687127

Calls written directly in this body: `GOOGLE_ROUTED_TOOL_CARRIES.values`, `mcpServerHostname`, `mcpServerRestMcpProvider`.

SHA-256 of the source span: `f122ff1d64749b5fdd360f941576ec1b9e298e2f23ec96577f77bd33328913ea`.

### evaluation:579262

Calls written directly in this body: `GOOGLE_ROUTED_TOOL_CARRIES.values`, `mcpServerHostname`, `mcpServerRestMcpProvider`.

SHA-256 of the source span: `6d10377fc14bfac2d82cd638c4a11f55c95b01b237a410a96dfabae972f18008`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
