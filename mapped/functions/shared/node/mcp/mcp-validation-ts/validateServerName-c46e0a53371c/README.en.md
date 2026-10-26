# `validateServerName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-validation.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-validation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686568-686583](../../../../../../../reference/runtime/host-main.cjs#L686568-L686583) | `FunctionDeclaration` | no | `rawName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686568-686583](../../../../../../../reference/runtime/host-main.cjs#L686568-L686583) | 4 | 0 | 0 | 1 | 4 | 0 |

### host:686568

Calls written directly in this body: `RESERVED_SERVER_NAMES.has`, `name18.includes`, `new SandMcpConfigError`, `rawName.trim`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `d7bb08e058f929762d86f0d046880db5710665fd07e9bc3ece21c44a50f18c12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
