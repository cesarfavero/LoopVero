# `createServerTranscriptClient/clientFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-client.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712424-712435](../../../../../../../reference/runtime/host-main.cjs#L712424-L712435) | `ArrowFunctionExpression` | no | `access5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712424-712435](../../../../../../../reference/runtime/host-main.cjs#L712424-L712435) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:712424

Calls written directly in this body: `createPromiseClient`.

Assignment or increment targets: `promiseClient`.

SHA-256 of the source span: `c99b299db135125bd8c61b0e74421c8d91c096e3a440ac373d9d8d01d4014fce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
