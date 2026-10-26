# `toolPermissionsOfRaw`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686922-686929](../../../../../../reference/runtime/host-main.cjs#L686922-L686929) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686922-686929](../../../../../../reference/runtime/host-main.cjs#L686922-L686929) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:686922

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `isUnknownRecord2`.

SHA-256 of the source span: `9bc0c962d1967d3500b5c41a948286f8423e31f0c45ec0eeb7084ec28cabb4b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
