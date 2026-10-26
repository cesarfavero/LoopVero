# `backendSummaryStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-summaries.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688812-688824](../../../../../../../reference/runtime/host-main.cjs#L688812-L688824) | `FunctionDeclaration` | no | `server, backend, isListed, slot, authState` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688812-688824](../../../../../../../reference/runtime/host-main.cjs#L688812-L688824) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:688812

Calls written directly in this body: `isBackendRefusalDetail`, `slotWithAuthState`, `statusForBackendSlot`, `statusFromBackendListStatus`, `unlistedStatusForBackendSlot`.

SHA-256 of the source span: `81964b59fbc32e1d95eb51faa60abd4a9a8544d92a56962c95287e62e130ed6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
