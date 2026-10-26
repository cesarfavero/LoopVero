# `missingRequiredFieldsError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-catalog-flow.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686319-686330](../../../../../../../reference/runtime/host-main.cjs#L686319-L686330) | `FunctionDeclaration` | no | `plugin, missing` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686319-686330](../../../../../../../reference/runtime/host-main.cjs#L686319-L686330) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686319

Calls written directly in this body: `.join`, `missing.map`, `new SandMcpConfigError`.

SHA-256 of the source span: `b0d3f062cf3115649e45da0df24ff79610c321dfdce68a004afd1cfa9bc84335`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
