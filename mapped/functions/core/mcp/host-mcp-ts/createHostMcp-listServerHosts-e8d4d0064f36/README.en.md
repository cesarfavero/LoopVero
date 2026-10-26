# `createHostMcp/listServerHosts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701206-701209](../../../../../../reference/runtime/host-main.cjs#L701206-L701209) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701206-701209](../../../../../../reference/runtime/host-main.cjs#L701206-L701209) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701206

Calls written directly in this body: `.getUserServerConfigs`, `displayServerHosts`, `manager.definitionSourceView`, `manager.lastAccountDisplayConfigView`, `restMcpHost`.

SHA-256 of the source span: `1e30d31d35592424a83066da686a4b6bf25d8dfed848743cac7667178cd3db0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
