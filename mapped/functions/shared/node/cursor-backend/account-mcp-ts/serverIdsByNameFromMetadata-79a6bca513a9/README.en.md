# `serverIdsByNameFromMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690295-690303](../../../../../../../reference/runtime/host-main.cjs#L690295-L690303) | `FunctionDeclaration` | no | `metadataByName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690295-690303](../../../../../../../reference/runtime/host-main.cjs#L690295-L690303) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:690295

Calls written directly in this body: `BigInt`, `Object.entries`.

Assignment or increment targets: `serverIdsByName[computed]`.

SHA-256 of the source span: `08febb3bbcf390f6112f747290392f9362c22dca0f61f6b999d325bd126fa6be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
