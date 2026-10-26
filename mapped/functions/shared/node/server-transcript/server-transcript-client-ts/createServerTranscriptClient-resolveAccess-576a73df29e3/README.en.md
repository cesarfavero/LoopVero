# `createServerTranscriptClient/resolveAccess`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-client.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712387-712402](../../../../../../../reference/runtime/host-main.cjs#L712387-L712402) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712387-712402](../../../../../../../reference/runtime/host-main.cjs#L712387-L712402) | 3 | 0 | 1 | 2 | 1 | 1 |

### host:712387

Calls written directly in this body: `String`, `deps.resolveAccess`, `new ServerTranscriptTailAccessError`, `now`.

Assignment or increment targets: `access5`, `cachedAccess`, `lastBaseUrl`.

Explicit throw targets: `ServerTranscriptTailAccessError`.

SHA-256 of the source span: `5cf7f447474b5602e84cbf2bd42233213c8ace72e476a6e32f11309ac879090e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
