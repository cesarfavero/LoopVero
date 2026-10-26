# `normalizeAccountKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-display-runtime.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-display-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685082-685088](../../../../../../../reference/runtime/host-main.cjs#L685082-L685088) | `FunctionDeclaration` | no | `rawAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685082-685088](../../../../../../../reference/runtime/host-main.cjs#L685082-L685088) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:685082

Calls written directly in this body: `new SandMcpConfigError`, `normalizeMcpAccountLabel`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `f50202008c5316acb04fb73937719678cb5d6c3537614e49812848c002355658`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
