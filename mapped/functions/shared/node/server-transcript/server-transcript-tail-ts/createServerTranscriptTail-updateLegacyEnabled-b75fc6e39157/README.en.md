# `createServerTranscriptTail/updateLegacyEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713109-713114](../../../../../../../reference/runtime/host-main.cjs#L713109-L713114) | `ArrowFunctionExpression` | no | `{ enabled }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713109-713114](../../../../../../../reference/runtime/host-main.cjs#L713109-L713114) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:713109

Calls written directly in this body: `deps.onActiveChange`, `fallBack`, `gated`, `isLegacyActive`, `transition`.

SHA-256 of the source span: `686782839321741152ee52925d3b8c72dd65e0b88f35d2a9194567847d8d2178`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
