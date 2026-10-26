# `uniqueBoundedConnectors`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-discovery-progress.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-discovery-progress-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690645-690647](../../../../../../../reference/runtime/host-main.cjs#L690645-L690647) | `FunctionDeclaration` | no | `identifiers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690645-690647](../../../../../../../reference/runtime/host-main.cjs#L690645-L690647) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:690645

Calls written directly in this body: `.sort`, `identifiers.map`, `new Set`.

SHA-256 of the source span: `eb9fdf335e265c3776fc50c81a2c5eeeb0f9a3c53a4b5018c4143f508d4bf45e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
