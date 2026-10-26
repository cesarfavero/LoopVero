# `cursorScmBuiltinListed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700928-700933](../../../../../../reference/runtime/host-main.cjs#L700928-L700933) | `FunctionDeclaration` | no | `display, provider` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700928-700933](../../../../../../reference/runtime/host-main.cjs#L700928-L700933) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:700928

Calls written directly in this body: `display.servers.some`.

SHA-256 of the source span: `79ca3eab189733ab158480d210b9e52cac8ba25eb80dc0349195df10f6941ad0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
