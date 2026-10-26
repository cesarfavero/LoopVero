# `statusFromBackendListStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-display-runtime.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-display-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685140-685143](../../../../../../../reference/runtime/host-main.cjs#L685140-L685143) | `FunctionDeclaration` | no | `status, { statusDetail } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685140-685143](../../../../../../../reference/runtime/host-main.cjs#L685140-L685143) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:685140

Calls written directly in this body: `parseMcpRawServerStatus`, `statusFromMcpRawServerStatus`.

SHA-256 of the source span: `e42dc84deed68dbc9ba6e942a9ec6287b3a4070dd96f4b004b89334eea8b692b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
