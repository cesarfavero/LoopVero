# `withStoredSameUrlCredentials`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689097-689109](../../../../../../../reference/runtime/host-main.cjs#L689097-L689109) | `FunctionDeclaration` | no | `stored, written` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689097-689109](../../../../../../../reference/runtime/host-main.cjs#L689097-L689109) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:689097

Calls written directly in this body: `normalizeMcpServerUrl`.

SHA-256 of the source span: `cda10f80572f84e4cc45fdfc6cf360cfa1e95516e0d17e5b97dd9cd304e8d8e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
